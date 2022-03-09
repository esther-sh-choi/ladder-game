import { Howl } from "howler";
import MelodicTechno from "./melodic-techno.mp3";

const bgm = {
  melodicTechnoSound: new Howl({
    src: [MelodicTechno],
    loop: true,
    volume: 0.2,
    id: 1,
  }),
};

export default bgm;
