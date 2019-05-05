var Dracula = require('graphdracula')

const { createGraph, createNode } = require('./graph')

const graphDS = createGraph(true)

graphDS.addNode('Husband')
graphDS.addNode('Wife')
graphDS.addNode('Cat')
graphDS.addNode('Dog')


graphDS.addEdge('Husband', 'Wife')
graphDS.addEdge('Wife', 'Husband')
graphDS.addEdge('Husband', 'Cat')
graphDS.addEdge('Husband', 'Dog')
graphDS.addEdge('Wife', 'Cat')
graphDS.addEdge('Wife', 'Dog')
graphDS.addEdge('Cat', 'Wife')
graphDS.addEdge('Dog', 'Husband')

var Graph = Dracula.Graph
var Renderer = Dracula.Renderer.Raphael
var Layout = Dracula.Layout.Spring

var graph = new Graph()

graphDS.nodes.forEach(({ children, key }) => {
  let result = `${key}`

  if (children.length) {
    children.forEach(node => {
      node.key
      graph.addEdge(result, node.key, { label: 'Love' })
    })
 }
})

var layout = new Layout(graph)
var renderer = new Renderer('#app', graph, 800, 800)
renderer.draw()

