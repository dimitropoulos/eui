import React, {
  cloneElement,
  Fragment,
  FunctionComponent,
  ReactElement,
} from 'react';
import classNames from 'classnames';

import { EuiText } from '../text';
import { EuiIcon, IconType } from '../icon';
import { CommonProps } from '../common';
import { EuiDatePickerProps } from './date_picker';

export type EuiDatePickerRangeProps = CommonProps & {
  /**
   * The end date `EuiDatePicker` element
   */
  endDateControl: ReactElement<EuiDatePickerProps>;
  fullWidth?: boolean;

  /**
   * Pass either an icon type or set to `false` to remove icon entirely
   */
  iconType?: boolean | IconType;

  /**
   * Won't apply any additional props to start and end date components
   */
  isCustom?: boolean;
  readOnly?: boolean;

  /**
   * The start date `EuiDatePicker` element
   */
  startDateControl: ReactElement<EuiDatePickerProps>;
};

export const EuiDatePickerRange: FunctionComponent<EuiDatePickerRangeProps> = ({
  children,
  className,
  startDateControl,
  endDateControl,
  iconType = true,
  fullWidth,
  isCustom,
  readOnly,
  ...rest
}) => {
  const classes = classNames(
    'euiDatePickerRange',
    {
      'euiDatePickerRange--fullWidth': fullWidth,
      'euiDatePickerRange--readOnly': readOnly,
    },
    className
  );

  // Set the icon for the entire group instead of per control
  let optionalIcon;
  if (iconType) {
    const icon = typeof iconType === 'string' ? iconType : 'calendar';
    optionalIcon = (
      <span className="euiDatePickerRange__icon">
        <EuiIcon type={icon} />
      </span>
    );
  } else {
    optionalIcon = null;
  }

  let startControl = startDateControl;
  let endControl = endDateControl;

  if (!isCustom) {
    startControl = cloneElement(startDateControl, {
      showIcon: false,
      fullWidth: fullWidth,
      readOnly: readOnly,
    });

    endControl = cloneElement(endDateControl, {
      showIcon: false,
      fullWidth: fullWidth,
      readOnly: readOnly,
    });
  }

  return (
    <div className={classes} {...rest}>
      {children ? (
        children
      ) : (
        <Fragment>
          {optionalIcon}
          {startControl}
          <EuiText
            className="euiDatePickerRange__delimeter"
            size="s"
            color="subdued">
            →
          </EuiText>
          {endControl}
        </Fragment>
      )}
    </div>
  );
};
