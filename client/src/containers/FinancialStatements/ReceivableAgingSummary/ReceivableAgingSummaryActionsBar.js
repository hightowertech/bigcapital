import React from 'react';
import {
  NavbarDivider,
  NavbarGroup,
  Classes,
  Button,
  Popover,
  PopoverInteractionKind,
  Position,
} from "@blueprintjs/core";
import { FormattedMessage as T } from 'react-intl';
import classNames from 'classnames';

import DashboardActionsBar from "components/Dashboard/DashboardActionsBar";
import FilterDropdown from 'components/FilterDropdown';
import Icon from 'components/Icon';
import { If } from 'components';

import withReceivableAging from './withReceivableAgingSummary';
import withReceivableAgingActions from './withReceivableAgingSummaryActions';

import { compose } from 'utils';


function ReceivableAgingSummaryActionsBar({
  toggleFilterReceivableAgingSummary,
  receivableAgingFilter,
}) {
  const filterDropdown = FilterDropdown({
    fields: [],
    onFilterChange: (filterConditions) => {},
  });

  const handleFilterToggleClick = () => {
    toggleFilterReceivableAgingSummary();
  };

  return (
    <DashboardActionsBar>
      <NavbarGroup>
        <Button
          className={classNames(Classes.MINIMAL, 'button--table-views')}
          icon={<Icon icon="cog-16" iconSize={16} />}
          text={<T id={'customize_report'} />}
        />
        <NavbarDivider />

        <If condition={receivableAgingFilter}>
          <Button
            className={Classes.MINIMAL}
            text={<T id={'hide_filter'} />}
            onClick={handleFilterToggleClick}
            icon={<Icon icon="arrow-to-top" />}
          />
        </If>

        <If condition={!receivableAgingFilter}>
          <Button
            className={Classes.MINIMAL}
            text={<T id={'show_filter'} />}
            onClick={handleFilterToggleClick}
            icon={<Icon icon="arrow-to-bottom" />}
          />
        </If>
        <NavbarDivider />

        <Popover
          content={filterDropdown}
          interactionKind={PopoverInteractionKind.CLICK}
          position={Position.BOTTOM_LEFT}
        >
          <Button
            className={classNames(Classes.MINIMAL, 'button--filter')}
            text={<T id={'filter'} />}
            icon={<Icon icon="filter-16" iconSize={16} />}
          />
        </Popover>

        <Button
          className={Classes.MINIMAL}
          icon={<Icon icon='print-16' iconSize={16} />}
          text={<T id={'print'} />}
        />
        <Button
          className={Classes.MINIMAL}
          icon={<Icon icon="file-export-16" iconSize={16} />}
          text={<T id={'export'} />}
        />
      </NavbarGroup>
    </DashboardActionsBar>
  )
}

export default compose(
  withReceivableAgingActions,
  withReceivableAging(({ receivableAgingSummaryFilter }) => ({
    receivableAgingFilter: receivableAgingSummaryFilter,
  })),
)(ReceivableAgingSummaryActionsBar)