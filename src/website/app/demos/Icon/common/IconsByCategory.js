/* @flow */
import React from 'react';
import withProps from 'recompose/withProps';
import * as Icons from 'mineral-ui-icons';
import styled from '@emotion/styled';
import Figure from '../common/Figure';
import FigCaption from '../common/FigCaption';
import FigContainer from '../common/FigContainer';
import Heading from '../../../SiteHeading';

const CategoryHeading = withProps({ as: 'h5', level: 4 })(
  styled(Heading)(({ theme }) => ({
    borderTop: `1px solid ${theme.borderColor}`,
    paddingTop: theme.space_stack_lg,
    position: 'relative',
    textTransform: 'capitalize'
  }))
);

const componentsByCategory: {
  [string]: Array<React$Component<*, *, *>>
} = Object.values(Icons)
  .sort()
  .reduce((acc, component) => {
    // $FlowFixMe - Flow bug: https://github.com/facebook/flow/issues/2221
    const { category } = component;
    acc[category] = (acc[category] || []).concat(component);
    return acc;
  }, {});

export default function ComponentsByCategory() {
  return (
    <div>
      {Object.entries(componentsByCategory).map(
        ([category, components], index) => {
          return (
            <div key={index}>
              <CategoryHeading id={`category-${category}`}>
                {category}
              </CategoryHeading>
              <FigContainer>
                {// $FlowFixMe - Flow bug: https://github.com/facebook/flow/issues/2221
                components.map((IconComponent, index) => {
                  return (
                    <Figure tabIndex={0} key={index}>
                      <IconComponent size={32} />
                      <FigCaption>{IconComponent.displayName}</FigCaption>
                    </Figure>
                  );
                })}
              </FigContainer>
            </div>
          );
        }
      )}
    </div>
  );
}
