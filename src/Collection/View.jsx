/**
 * Document view component.
 * @module components/theme/View/CollectionView
 */

import React from 'react';
import { Helmet } from '@plone/volto/helpers';
import { Container } from 'semantic-ui-react';
import BlockView from './BlockView';
import { getBaseUrl, flattenToAppURL } from '@plone/volto/helpers';

/**
 * List view component class.
 * @function CollectionView
 * @params {object} content Content object.
 * @returns {string} Markup of the component.
 */
const CollectionView = ({ content }) => {
  const url = flattenToAppURL(getBaseUrl(content['@id']));
  // console.log('content url', url);
  return (
    <Container id="page-home">
      <Helmet title={content.title} />
      <section id="content-core">
        <h1 className="documentFirstHeading">
          {content.title}
          {content.subtitle && ` - ${content.subtitle}`}
        </h1>
        {content.description && (
          <p className="documentDescription">{content.description}</p>
        )}
        <BlockView
          data={{
            collection_url: url,
            facetFilter: content.filter,
          }}
        />
      </section>
    </Container>
  );
};
export default CollectionView;
