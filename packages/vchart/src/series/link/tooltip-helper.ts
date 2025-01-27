import type { ISeriesTooltipHelper } from '../interface';
import { BaseSeriesTooltipHelper } from '../base/tooltip-helper';
import type { ITooltipPattern, TooltipActiveType } from '../../typings';
import { TimeUtil } from '@visactor/vutils';

export class LinkSeriesTooltipHelper extends BaseSeriesTooltipHelper implements ISeriesTooltipHelper {
  /** 获取默认的tooltip pattern */
  getDefaultTooltipPattern(activeType: TooltipActiveType): ITooltipPattern | null {
    if (activeType === 'mark') {
      return {
        visible: true,
        activeType,
        title: {
          key: 'link info',
          value: 'link info'
        },
        content: [
          {
            hasShape: true,
            shapeType: 'square',
            shapeColor: this.shapeColorCallback,
            shapeStroke: this.shapeStrokeCallback,
            key: 'time',
            value: (datum: any) => TimeUtil.getInstance().timeFormat('%Y%m%d %H:%M', datum.from.split('_')[1])
          },
          {
            hasShape: true,
            shapeType: 'square',
            shapeColor: this.shapeColorCallback,
            shapeStroke: this.shapeStrokeCallback,
            key: 'type',
            value: (datum: any) => datum.action_type
          },
          {
            hasShape: true,
            shapeType: 'square',
            shapeColor: this.shapeColorCallback,
            shapeStroke: this.shapeStrokeCallback,
            key: 'from',
            value: (datum: any) => datum.from
          },
          {
            hasShape: true,
            shapeType: 'square',
            shapeColor: this.shapeColorCallback,
            shapeStroke: this.shapeStrokeCallback,
            key: 'to',
            value: (datum: any) => datum.to
          }
        ]
      };
    }
    return null;
  }
}
