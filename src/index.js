import chartIcon from '@plone/volto/icons/world.svg';

import HiddenWidget from './Widgets/Hidden';
import CollectionYears from './Widgets/CollectionYears';
// import PickObject from './PickObject';

import AlignBlockWidget from './Widgets/Align';

import NewsView from './News/NewsView';
import NewsEdit from './News/NewsEdit';

import CollectionBlockView from './Collection/BlockView';
import CollectionBlockEdit from './Collection/BlockEdit';
import CollectionView from './Collection/View';

//import ImageCardsView from './ImageCards/ImageCardsView';
//import ImageCardsEdit from './ImageCards/ImageCardsEdit';

import * as addonReducers from './reducers';

import {
  NavigationPortlet,
  DefaultPortlet,
  PortletManagerRenderer,
  ClassicPortlet,
} from './Portlets';

function addCustomGroup(config) {
  const hasCustomGroup = config.blocks.groupBlocksOrder.filter((el) => {
    return el.id === 'custom_addons';
  });
  if (hasCustomGroup.length === 0) {
    config.blocks.groupBlocksOrder.push({
      id: 'custom_addons',
      title: 'Custom addons',
    });
  }
}

export default function applyConfig(config) {
  addCustomGroup(config);

  config.addonReducers = {
    ...config.addonReducers,
    ...addonReducers,
  };

  config.settings.virtualHostedPaths = ['**/RSS'];

  config.settings.portlets = {
    managers: {
      ...config.portlets?.managers,
      default: PortletManagerRenderer,
    },
    renderers: {
      'portlets.Navigation': NavigationPortlet,
      'portlets.Classic': ClassicPortlet,
      default: DefaultPortlet,
    },
  };
  config.views.contentTypesViews.Collection = CollectionView;

  config.widgets.id.collection_years = CollectionYears;
  config.widgets.id.blocks = HiddenWidget;
  config.widgets.id.blocks_layout = HiddenWidget;

  // config.widgets.widget.object_by_path = PickObject;
  config.widgets.widget.align = AlignBlockWidget;

  config.blocks.blocksConfig.collection_block = {
    id: 'collection_block',
    title: 'Collection Listing',
    view: CollectionBlockView,
    edit: CollectionBlockEdit,
    icon: chartIcon,
    group: 'custom_addons',
  };

  config.blocks.blocksConfig.news = {
    id: 'news',
    title: 'News',
    view: NewsView,
    edit: NewsEdit,
    icon: chartIcon,
    group: 'custom_addons',
  };

  // config.blocks.blocksConfig.imagecards = {
  //   id: 'imagecards',
  //   title: 'Image Cards',
  //   icon: codeSVG,
  //   group: 'bise',
  //   view: ImageCardsView,
  //   edit: ImageCardsEdit,
  //   restricted: false,
  //   mostUsed: false,
  //   sidebarTab: 1,
  //   security: {
  //     addPermission: [],
  //     view: [],
  //   },
  // };

  // config.viewlets = [
  //   {
  //     path: '/controlpanel',
  //     component: ControlPanelViewlet,
  //   },
  //   ...(config.viewlets || []),
  // ];

  return config;
}
