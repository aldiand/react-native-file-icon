import React from 'react';
import { colord, extend as extendColord } from 'colord';
import namesPlugin from 'colord/plugins/names';
import uniqueId from 'lodash.uniqueid';
import glyphs from './Glyphs';
import {
  ClipPath,
  Defs,
  G,
  LinearGradient,
  Path,
  Rect,
  Stop,
  Svg,
  Text,
} from 'react-native-svg';

extendColord([namesPlugin]);

type FileIconType =
  | '3d'
  | 'acrobat'
  | 'audio'
  | 'binary'
  | 'code'
  | 'code2'
  | 'compressed'
  | 'document'
  | 'drive'
  | 'font'
  | 'image'
  | 'presentation'
  | 'settings'
  | 'spreadsheet'
  | 'vector'
  | 'video';

export interface FileIconProps {
  color?: string;
  extension?: string;
  fold?: boolean;
  foldColor?: string;
  glyphColor?: string;
  gradientColor?: string;
  gradientOpacity?: number;
  labelColor?: string;
  labelTextColor?: string;
  labelUppercase?: boolean;
  radius?: number;
  type?: FileIconType;
}

const VIEWBOX = {
  WIDTH: 40,
  HEIGHT: 48,
};

const ICON = {
  WIDTH: VIEWBOX.WIDTH,
  HEIGHT: VIEWBOX.HEIGHT,
  X_OFFSET: 0,
};

const FOLD = {
  HEIGHT: 12,
};

const LABEL_HEIGHT = 14;

export const FileIcon = ({
  color = 'whitesmoke',
  extension,
  fold = true,
  foldColor,
  glyphColor,
  gradientColor = 'white',
  gradientOpacity = 0.25,
  labelColor,
  labelTextColor = 'white',
  radius = 4,
  type,
}: FileIconProps) => {
  const UNIQUE_ID = uniqueId();

  return (
    <Svg
      viewBox={`0 0 ${VIEWBOX.WIDTH} ${VIEWBOX.HEIGHT}`}
      width="100%"
      height="100%"
      // eslint-disable-next-line react-native/no-inline-styles
      style={{ maxWidth: '100%' }}
    >
      <Defs>
        <ClipPath id={`pageRadius${UNIQUE_ID}`}>
          <Rect
            x={ICON.X_OFFSET}
            y="0"
            rx={radius}
            ry={radius}
            width={ICON.WIDTH}
            height={ICON.HEIGHT}
          />
        </ClipPath>

        <ClipPath id="foldCrop">
          <Rect
            width={ICON.WIDTH}
            height={FOLD.HEIGHT}
            transform={`rotate(-45 0 ${FOLD.HEIGHT})`}
          />
        </ClipPath>
        <LinearGradient
          x1="100%"
          y1="0%"
          y2="100%"
          id={`pageGradient${UNIQUE_ID}`}
        >
          <Stop
            stopColor={gradientColor}
            stopOpacity={gradientOpacity}
            offset="0%"
          />
          <Stop stopColor={gradientColor} stopOpacity="0" offset="66.67%" />
        </LinearGradient>
      </Defs>

      <G id="file" clipPath={`url(#pageRadius${UNIQUE_ID})`}>
        {fold ? (
          <React.Fragment>
            <Path
              d={`M${ICON.X_OFFSET} 0 h ${ICON.WIDTH - FOLD.HEIGHT} L ${
                ICON.WIDTH + ICON.X_OFFSET
              } ${FOLD.HEIGHT} v ${ICON.HEIGHT - FOLD.HEIGHT} H ${
                ICON.X_OFFSET
              } Z`}
              fill={color}
            />
            <Path
              d={`M${ICON.X_OFFSET} 0 h ${ICON.WIDTH - FOLD.HEIGHT} L ${
                ICON.WIDTH + ICON.X_OFFSET
              } ${FOLD.HEIGHT} v ${ICON.HEIGHT - FOLD.HEIGHT} H ${
                ICON.X_OFFSET
              } Z`}
              fill={`url(#pageGradient${UNIQUE_ID})`}
            />
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Rect
              x={ICON.X_OFFSET}
              y="0"
              width={ICON.WIDTH}
              height={ICON.HEIGHT}
              fill={color}
            />
            <Rect
              x={ICON.X_OFFSET}
              y="0"
              width={ICON.WIDTH}
              height={ICON.HEIGHT}
              fill={`url(#pageGradient${UNIQUE_ID})`}
            />
          </React.Fragment>
        )}
      </G>

      {fold && (
        <G transform={`translate(28 ${FOLD.HEIGHT}) rotate(-90)`}>
          <Rect
            width={ICON.WIDTH}
            height={ICON.HEIGHT}
            fill={foldColor || colord(color).darken(0.1).toHex()}
            rx={radius}
            ry={radius}
            clipPath="url(#foldCrop)"
          />
        </G>
      )}

      {extension && (
        <React.Fragment>
          <G id="label">
            <Rect
              fill={labelColor || colord(color).darken(0.3).toHex()}
              x={ICON.X_OFFSET}
              y={ICON.HEIGHT - LABEL_HEIGHT}
              width={ICON.WIDTH}
              height={LABEL_HEIGHT}
              clipPath={`url(#pageRadius${UNIQUE_ID})`}
            />
          </G>
          <G id="labelText" transform={`translate(${ICON.X_OFFSET} 34)`}>
            <Text
              x={ICON.WIDTH / 2}
              y="10"
              fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
              fontSize="9"
              fill={labelTextColor}
              textAnchor="middle"
              fontWeight={'bold'}
            >
              {extension}
            </Text>
          </G>
        </React.Fragment>
      )}

      {type && (
        <G
          transform={`translate(-4 ${!extension ? 6 : 0})`}
          fill={glyphColor || colord(color).darken(0.15).toHex()}
        >
          {glyphs[type]}
        </G>
      )}
    </Svg>
  );
};

export default FileIcon;
