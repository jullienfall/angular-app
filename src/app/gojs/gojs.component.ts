import { Component, ViewChild, ElementRef } from '@angular/core';
import * as go from 'gojs';

@Component({
  selector: 'app-gojs',
  templateUrl: './gojs.component.html',
  styleUrls: ['./gojs.component.css']
})
export class GojsComponent {
  diagram: go.Diagram = new go.Diagram();

  @ViewChild('diagramDiv')
  private diagramRef: ElementRef;

  constructor() {
    const $ = go.GraphObject.make;
    this.diagram = new go.Diagram();
    this.diagram.initialContentAlignment = go.Spot.Center;
    this.diagram.undoManager.isEnabled = true;
    this.diagram.layout = $(go.TreeLayout, {
      angle: 90,
      layerSpacing: 35
    });

    this.diagram.nodeTemplate = $(
      go.Node,
      'Horizontal',
      { background: '#17a2b1' },
      $(
        go.Panel,
        'Horizontal',
        $(
          go.Picture,
          {
            name: 'Picture',
            desiredSize: new go.Size(60, 50),
            margin: new go.Margin(6, 8, 6, 10)
          },
          new go.Binding('source')
        ),
        $(
          go.Panel,
          'Table',
          {
            maxSize: new go.Size(150, 999),
            margin: new go.Margin(6, 10, 0, 3),
            defaultAlignment: go.Spot.Left
          },
          $(go.RowColumnDefinition, { column: 2, width: 4 }),
          $(
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
          $(go.TextBlock, 'Title: ', { row: 1, column: 0 }),
          $(
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
          $(
            go.TextBlock,
            { row: 2, column: 0 },
            new go.Binding('text', 'key', function(v) {
              return 'ID: ' + v;
            })
          ),
          $(
            go.TextBlock,
            { name: 'boss', row: 2, column: 3 },
            new go.Binding('text', 'parent', function(v) {
              return 'Boss: ' + v;
            })
          ),
          $(
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

    // define a Link template that routes orthogonally, with no arrowhead
    this.diagram.linkTemplate = $(
      go.Link,
      { routing: go.Link.Orthogonal, corner: 5 },
      $(go.Shape, { strokeWidth: 3, stroke: '#555' })
    ); // the link shape

    var model = $(go.TreeModel);
    model.nodeDataArray = [
      {
        key: 1,
        name: 'Stella Payne Diaz',
        title: 'CEO',
        source:
          'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
      },
      {
        key: 2,
        name: 'Luke Warm',
        title: 'VP Marketing/Sales',
        parent: 1,
        source:
          'https://images.pexels.com/photos/756453/pexels-photo-756453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
      },
      {
        key: 3,
        name: 'Meg Meehan Hoffa',
        title: 'Sales',
        parent: 2,
        source:
          'https://images.pexels.com/photos/555790/pexels-photo-555790.png?auto=compress&cs=tinysrgb&h=350'
      },
      {
        key: 4,
        name: 'Peggy Flaming',
        title: 'VP Engineering',
        parent: 1,
        source:
          'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&h=350'
      },
      {
        key: 5,
        name: 'Saul Wellingood',
        title: 'Manufacturing',
        parent: 4,
        source:
          'https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&h=350'
      },
      {
        key: 6,
        name: 'Al Ligori',
        title: 'Marketing',
        parent: 2,
        source:
          'https://images.pexels.com/photos/407237/pexels-photo-407237.jpeg?auto=compress&cs=tinysrgb&h=350'
      },
      {
        key: 7,
        name: 'Dot Stubadd',
        title: 'Sales Rep',
        parent: 3,
        source:
          'https://images.pexels.com/photos/936229/pexels-photo-936229.jpeg?auto=compress&cs=tinysrgb&h=350'
      },
      {
        key: 8,
        name: 'Les Ismore',
        title: 'Project Mgr',
        parent: 5,
        source:
          'https://images.pexels.com/photos/709188/pexels-photo-709188.jpeg?auto=compress&cs=tinysrgb&h=350'
      },
      {
        key: 9,
        name: 'April Lynn Parris',
        title: 'Events Mgr',
        parent: 6,
        source:
          'https://images.pexels.com/photos/355164/pexels-photo-355164.jpeg?auto=compress&cs=tinysrgb&h=350'
      },
      {
        key: 10,
        name: 'Anita Hammer',
        title: 'Process',
        parent: 5,
        source:
          'https://images.pexels.com/photos/598745/pexels-photo-598745.jpeg?auto=compress&cs=tinysrgb&h=350'
      },

      {
        key: 11,
        name: 'Evan Elpus',
        title: 'Quality',
        parent: 5,
        source:
          'https://images.pexels.com/photos/1036627/pexels-photo-1036627.jpeg?auto=compress&cs=tinysrgb&h=350'
      },
      {
        key: 12,
        name: 'Lotta B. Essen',
        title: 'Sales Rep',
        parent: 3,
        source:
          'https://images.pexels.com/photos/462680/pexels-photo-462680.jpeg?auto=compress&cs=tinysrgb&h=350s'
      }
    ];
    this.diagram.model = model;
  }

  ngOnInit() {
    this.diagram.div = this.diagramRef.nativeElement;
  }
}
