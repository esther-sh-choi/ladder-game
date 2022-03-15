import { Howl } from "howler";
import MelodicTechno from "./melodic-techno.mp3";
import KidsDowntemp from "./kids-downtemp.mp3";
import LightStep from "./light-step.mp3";
import SpyJazz from "./spy-jazz.mp3";
import Techno from "./techno.mp3";

const bgm = {
  melodicTechnoSound: new Howl({
    src: [MelodicTechno],
    loop: true,
    volume: 0.2,
    id: 1,
  }),
  KidsDowntempSound: new Howl({
    src: [KidsDowntemp],
    loop: true,
    volume: 0.2,
    id: 1,
  }),
  LightStepSound: new Howl({
    src: [LightStep],
    loop: true,
    volume: 0.2,
    id: 1,
  }),
  SpyJazzSound: new Howl({
    src: [SpyJazz],
    loop: true,
    volume: 0.2,
    id: 1,
  }),
  TechnoSound: new Howl({
    src: [Techno],
    loop: true,
    volume: 0.2,
    id: 1,
  }),
};

export default bgm;
