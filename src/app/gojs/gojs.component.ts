import { Component, ViewChild, ElementRef, OnInit, OnDestroy } from '@angular/core';

// service
import { GojsService } from './gojs.service';

// GoJS
import * as go from 'gojs';

@Component({
  selector: 'app-gojs',
  templateUrl: './gojs.component.html',
  styleUrls: ['./gojs.component.css']
})
export class GojsComponent implements OnInit, OnDestroy {
  private subscription;
  diagram: go.Diagram;
  $ = go.GraphObject.make;
  model = this.$(go.TreeModel);

  @ViewChild('diagramDiv')
  private diagramRef: ElementRef;

  constructor(private gojsService: GojsService) {}

  ngOnInit() {
    this.subscription = this.gojsService
      .getData()
      .subscribe(value => (this.model.nodeDataArray = value))
      .add(() => {
        this.goJS();
        this.diagram.div = this.diagramRef.nativeElement;
      });
  }

  goJS() {
    this.diagram = new go.Diagram();
    this.diagram.initialContentAlignment = go.Spot.Center;
    this.diagram.undoManager.isEnabled = true;
    this.diagram.layout = this.$(go.TreeLayout, {
      angle: 90,
      layerSpacing: 35
    });

    this.diagram.nodeTemplate = this.$(
      go.Node,
      'Horizontal',
      { background: '#17a2b1' },
      {
        doubleClick: (e, obj) => {
          var clicked = obj.part;
          if (clicked !== null) {
            var thisemp = clicked.data;
            this.diagram.startTransaction('add employee');
            var newemp = {
              key: getNextKey(),
              name: '(new person)',
              title: '',
              source: 'https://www.acrpnet.org/wp-content/uploads/2016/09/User-Icon-Gray.jpg',
              parent: thisemp.key
            };
            this.diagram.model.addNodeData(newemp);
            this.diagram.commitTransaction('add employee');
          }
        }
      },
      {
        // handle dragging a Node onto a Node to (maybe) change the reporting relationship
        mouseDragEnter: (e, node, prev) => {
          var diagram = node.diagram;
          var selnode = diagram.selection.first();
          if (!mayWorkFor(selnode, node)) return;
          var shape = node.findObject('SHAPE');
          if (shape) {
            shape._prevFill = shape.fill; // remember the original brush
            shape.fill = 'darkred';
          }
        },
        mouseDragLeave: (e, node, next) => {
          var shape = node.findObject('SHAPE');
          if (shape && shape._prevFill) {
            shape.fill = shape._prevFill; // restore the original brush
          }
        },
        mouseDrop: (e, node) => {
          var diagram = node.diagram;
          var selnode = diagram.selection.first(); // assume just one Node in selection
          if (mayWorkFor(selnode, node)) {
            // find any existing link into the selected node
            var link = selnode.findTreeParentLink();
            if (link !== null) {
              // reconnect any existing link
              link.fromNode = node;
            } else {
              // else create a new link
              diagram.toolManager.linkingTool.insertLink(node, node.port, selnode, selnode.port);
            }
          }
        }
      },
      this.$(
        go.Panel,
        'Horizontal',
        {
          name: 'SHAPE',
          portId: '',
          fromLinkable: true,
          toLinkable: true,
          cursor: 'pointer'
        },
        this.$(
          go.Picture,
          {
            name: 'Picture',
            desiredSize: new go.Size(65, 50),
            margin: new go.Margin(6, 8, 6, 10)
          },
          new go.Binding('source')
        ),
        this.$(
          go.Panel,
          'Table',
          {
            maxSize: new go.Size(150, 999),
            margin: new go.Margin(6, 10, 0, 3),
            defaultAlignment: go.Spot.Left
          },
          this.$(go.RowColumnDefinition, { column: 2, width: 4 }),
          this.$(
            go.TextBlock,
            {
              row: 0,
              column: 0,
              columnSpan: 5,
              font: '12pt Segoe UI,sans-serif',
              editable: true,
              isMultiline: false,
              minSize: new go.Size(10, 16)
            },
            new go.Binding('text', 'name').makeTwoWay()
          ),
          this.$(go.TextBlock, 'Title: ', { row: 1, column: 0 }),
          this.$(
            go.TextBlock,
            {
              row: 1,
              column: 1,
              columnSpan: 4,
              editable: true,
              isMultiline: false,
              minSize: new go.Size(10, 14),
              margin: new go.Margin(0, 0, 0, 3)
            },
            new go.Binding('text', 'title').makeTwoWay()
          ),
          this.$(
            go.TextBlock,
            { row: 2, column: 0 },
            new go.Binding('text', 'key', function(v) {
              return 'ID: ' + v;
            })
          ),
          this.$(
            go.TextBlock,
            { name: 'boss', row: 2, column: 3 },
            new go.Binding('text', 'parent', function(v) {
              return 'Boss: ' + v;
            })
          ),
          this.$(
            go.TextBlock,
            {
              row: 3,
              column: 0,
              columnSpan: 5,
              font: 'italic 9pt sans-serif',
              wrap: go.TextBlock.WrapFit,
              editable: true, // by default newlines are allowed
              minSize: new go.Size(10, 14)
            },
            new go.Binding('text', 'comments').makeTwoWay()
          )
        ) // end Table Panel
      )
    );

    this.diagram.nodeTemplate.contextMenu = this.$(
      go.Adornment,
      'Vertical',
      this.$('ContextMenuButton', this.$(go.TextBlock, 'Remove Role'), {
        click: (e, obj) => {
          // reparent the subtree to this node's boss, then remove the node
          var node = obj.part.adornedPart;
          if (node !== null && node.data.key != 1) {
            this.diagram.startTransaction('reparent remove');
            var chl = node.findTreeChildrenNodes();
            // iterate through the children and set their parent key to our selected node's parent key
            while (chl.next()) {
              var emp = chl.value;
              this.model.setParentKeyForNodeData(emp.data, node.findTreeParentNode().data.key);
            }
            // and now remove the selected node itself
            this.model.removeNodeData(node.data);
            this.diagram.commitTransaction('reparent remove');
          }
        }
      }),
      this.$('ContextMenuButton', this.$(go.TextBlock, 'Remove Department'), {
        click: (e, obj) => {
          // remove the whole subtree, including the node itself
          var node = obj.part.adornedPart;
          if (node !== null) {
            this.diagram.startTransaction('remove dept');
            this.diagram.removeParts(node.findTreeParts(), true);
            this.diagram.commitTransaction('remove dept');
          }
        }
      })
    );

    let mayWorkFor = (node1, node2) => {
      if (!(node1 instanceof go.Node)) return false; // must be a Node
      if (node1 === node2) return false; // cannot work for yourself
      if (node2.isInTreeOf(node1)) return false; // cannot work for someone who works for you
      return true;
    };

    let nodeIdCounter = -1;

    let getNextKey = () => {
      var key = nodeIdCounter;
      while (this.diagram.model.findNodeDataForKey(key) !== null) {
        key = nodeIdCounter--;
      }
      return key;
    };

    // define the Link template
    this.diagram.linkTemplate = this.$(
      go.Link,
      go.Link.Orthogonal,
      { corner: 5, relinkableFrom: true, relinkableTo: true },
      this.$(go.Shape, { strokeWidth: 4, stroke: '#00a4a4' })
    ); // the link shape

    this.diagram.model = this.model;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
