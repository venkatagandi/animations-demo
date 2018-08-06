import {
  trigger,
  state,
  transition,
  style,
  animate,
  keyframes,
  useAnimation,
  query,
  animateChild,
  group,
  stagger
} from "@angular/animations";
export const expandcollapse = trigger("expandCollapse", [
  state(
    "collapsed",
    style({
      height: 0,
      paddingTop: 0,
      paddingBottom: 0,
      overflow: "hidden",
      opacity: 0
    })
  ),
  state("expanded", style({ height: "*", padding: "*", overflow: "auto" })),
  transition("collapsed=>expanded", [
    animate(
      ".3s ease-out",
      style({
        height: "*",
        paddingTop: "*",
        paddingBottom: "*",
        overflow: "hidden"
      })
    ),
    animate("1s", style({ opacity: 1 }))
  ]),
  transition("expanded => collapsed", [animate(".3s ease-in")])
]);
