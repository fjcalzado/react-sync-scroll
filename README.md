# react-sync-scroll

Playground to synchronize scroll in React components.

This is a tricky task that may look easy at a first sight. However, it involves a couple of key issues:
- Ping-Pong problem: when a component bubbles up a scroll event to the parent, the parent will bubble down to children. A sibling of the original component doing the scroll will also fire a scroll event that will bubble up and propagate to the children again. And so on, and again and again. This ends up in a storm of calls.
- In order to solve Ping-Pong, React component are not very handy, we don't have much control over them and they are asynchronously fired by its virual DOM which make things more complicated.
- Even if we just bubble up a single scroll event to our parent component, this may happen hundreds of time per second. We don't want to flood our call stack with all these callbacks and exhaust execution. 

In order to overcome this difficulties, I have implemented a simple solution with native events that will also be throttled to the scroll animation frame rate. Parent component has been given a smarter logic to propagate scroll notifications down to its children except the one that originally is notifiying a scroll from the user. In order to programatically modify scroll position of each children, we have to temporarily defer scroll event listener until the scroll animation has completed. This is achieved by a leading-edge-trailing-edge debounce.

[Live Demo here](https://fjcalzado.github.io/react-sync-scroll/)