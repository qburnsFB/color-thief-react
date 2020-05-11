import { useEffect, useReducer } from 'react';
import getPalette from './getPalette';

const initialState = {
  loading: true,
  data: [],
  error: undefined,
};

/**
 * usePalette reducer
 * @param {object} state
 * @param {object} action
 */
function reducer(state, action) {
  switch (action.type) {
    case 'getPalette':
      return initialState;
    case 'resolvePalette':
      return { ...state, data: action.payload, loading: false };
    case 'rejectPalette':
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
}

/**
 * React hook for usePalette from PaletteThief
 * @param {String} imgSrc
 * @param {String} format
 * @param {String} crossOrigin
 * @param {Number} quality
 */
export default function usePalette(
  imgSrc,
  colorCount = 2,
  format = 'rgbString',
  options = {},
) {
  const { crossOrigin = null, quality = 10, existingData } = options;
  const initState = existingData?.vibrant ? { ...initialState, data: existingData} : initialState;

  const [state, dispatch] = useReducer(reducer, initState);

  useEffect(() => {
    if (!state.data.length || !state.data?.vibrant) {
      dispatch({type: 'getPalette'});

      getPalette(imgSrc, colorCount, format, crossOrigin, quality)
          .then((palette) => {
            dispatch({type: 'resolvePalette', payload: palette});
          })
          .catch((ex) => {
            dispatch({type: 'rejectPalette', payload: ex});
          });
    } else {
      dispatch({type: 'resolvePalette', payload: existingData });
    }
  }, [imgSrc]);

  return state;
}
