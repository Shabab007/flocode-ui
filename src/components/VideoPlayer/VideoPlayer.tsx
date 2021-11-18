
import { Player } from '@remotion/player';

import { Props } from './types';

const VideoPlayer = (props: Props) => {
  const { durationInFrames, Composition, playerBackgroundColor } = props;

  return (
    <div>
      <Player
        durationInFrames={durationInFrames}
        compositionWidth={800}
        compositionHeight={450}
        fps={60}
        loop
        component={() => Composition}
        controls
        doubleClickToFullscreen
        style={{ width: '100%', backgroundColor: playerBackgroundColor }}
      />
    </div>
  );
};

export default VideoPlayer;
