//import logo from './logo.svg';
import styleDrum from './styleDrum.css'
import React from "react";
//import Drum from "./Drum"
const firstSoundsGroup = [
  {
    keyCode: 81,
    key: 'Q',
    id: 'Heater-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
  },
  {
    keyCode: 87,
    key: 'W',
    id: 'Heater-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
  },
  {
    keyCode: 69,
    key: 'E',
    id: 'Heater-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
  },
  {
    keyCode: 65,
    key: 'A',
    id: 'Heater-4',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
  },
  {
    keyCode: 83,
    key: 'S',
    id: 'Clap',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
  },
  {
    keyCode: 68,
    key: 'D',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
  },
  {
    keyCode: 90,
    key: 'Z',
    id: "Kick-n'-Hat",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
  },
  {
    keyCode: 88,
    key: 'X',
    id: 'Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
  },
  {
    keyCode: 67,
    key: 'C',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
  }
];

const secondSoundsGroup = [
  {
    keyCode: 81,
    key: 'Q',
    id: 'Chord-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
  },
  {
    keyCode: 87,
    key: 'W',
    id: 'Chord-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
  },
  {
    keyCode: 69,
    key: 'E',
    id: 'Chord-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
  },
  {
    keyCode: 65,
    key: 'A',
    id: 'Shaker',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
  },
  {
    keyCode: 83,
    key: 'S',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'
  },
  {
    keyCode: 68,
    key: 'D',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
  },
  {
    keyCode: 90,
    key: 'Z',
    id: 'Punchy-Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
  },
  {
    keyCode: 88,
    key: 'X',
    id: 'Side-Stick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
  },
  {
    keyCode: 67,
    key: 'C',
    id: 'Snare',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
  }
];

const soundsName = {
heaterKit: "Heater Kit",
smoothPianoKit: "Smooth Piano Kit"
};

const soundsGroup = {
heaterKit: firstSoundsGroup,
smoothPianoKit: secondSoundsGroup
}

const KeyboardKey = ({ play,  sound: { id, key, url, keyCode } }) => {
const handleKeydown = (e) => {
  if(keyCode === e.keyCode) {
    
    play(key, id);
    
  }
}

React.useEffect(() => {
    document.addEventListener('keydown', handleKeydown);
}, [])

return (
  <button value="test" id={keyCode} className="drum-pad" onClick={() => play(key, id)}>
    <audio className="clip" src={url} id={key} />
    {key}
  </button>
);
}

const Keyboard = ({ sounds, play}) =>  (
<div className="keyboard">
  {sounds.map((sound) => <KeyboardKey sound={sound} play={play}  />)}
        
  
</div>
);

const DumControle = ({  name,  changeSoundGroup }) => (
<div className="controle">
  
  <h2 id="display" >{name}</h2>
  <button onClick={changeSoundGroup}>Change Sounds Group</button>
</div>
);

const App = () => {

const [soundName, setSoundName] = React.useState("");
const [soundType, setSoundType] = React.useState("heaterKit");
const [sounds, setSounds] = React.useState(soundsGroup[soundType]);



const play = (key, sound) => {
  setSoundName(sound)
  const audio = document.getElementById(key);
  
  audio.currentTime = 0;
  audio.play();
  
}



const changeSoundGroup = () => {
  setSoundName("")
  if(soundType === "heaterKit"){
      setSoundType("smoothPianoKit");
      setSounds(soundsGroup.smoothPianoKit);
  } else {
      setSoundType("heaterKit");
      setSounds(soundsGroup.heaterKit);
  }
}




return (
  <div id="drum-machine">
   
    <div className="wrapper">
      <Keyboard sounds={sounds} play={play}  />
      <DumControle 
        
        name={soundName || soundsName[soundType]} 
        changeSoundGroup={changeSoundGroup}
        
       />
    </div>
  </div>
)
};
export default App;
