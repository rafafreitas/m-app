import {palette} from '../../helpers';
import {alphas, colors} from '../../constants';

const states = palette(paletteUse => ({
  block: {
    enabled: {
      backgroundColor: paletteUse.color,
      textStyle: {
        fontSize: 16,
        color: paletteUse.inverse
      },
      loading: paletteUse.inverse
    },
    disabled: {
      backgroundColor: `${paletteUse.color}${alphas.a60}`,
      textStyle: {
        fontSize: 16,
        color: paletteUse.inverse
      },
      loading: paletteUse.inverse
    }
  },
  outline: {
    enabled: {
      backgroundColor: colors.transparent,
      borderColor: paletteUse.color,
      borderWidth: 1,
      textStyle: {
        fontSize: 16,
        color: paletteUse.color
      },
      loading: paletteUse.color
    },
    disabled: {
      backgroundColor: colors.divider,
      textStyle: {
        fontSize: 16,
        color: colors.grey
      },
      loading: paletteUse.color
    }
  },
  link: {
    enabled: {
      justifyContent: 'center',
      backgroundColor: colors.transparent,
      textStyle: {
        color: paletteUse.color,
        fontWeight: '500',
        fontSize: 16
      },
      loading: paletteUse.color
    },
    disabled: {
      justifyContent: 'center',
      backgroundColor: colors.transparent,
      textStyle: {
        color: colors.grey,
        fontWeight: '500',
        fontSize: 16
      },
      loading: paletteUse.color
    }
  }
}));

export default {
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    height: 50,
    justifyContent: 'space-around',
    textAlignVertical: 'center',
    width: 330
  },
  ...states
};
