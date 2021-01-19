import chartIcon from "@plone/volto/icons/world.svg";
import codeSVG from "@plone/volto/icons/code.svg";

import HiddenWidget from "./Widgets/Hidden";
import CollectionYears from "./Widgets/CollectionYears";
import PickObject from "./PickObject";
import ObjectListWidget from "./Widgets/ObjectList";
import AlignBlockWidget from "./Widgets/Align";
import AttachedImageWidget from "./Widgets/AttachedImage";

import NewsView from "./News/NewsView";
import NewsEdit from "./News/NewsEdit";

import CollectionBlockView from "./Collection/BlockView";
import CollectionBlockEdit from "./Collection/BlockEdit";
import CollectionView from "./Collection/View";

import * as addonReducers from "./reducers";
import installDraftEditor from "./drafteditor";

import {
  NavigationPortlet,
  DefaultPortlet,
  PortletManagerRenderer,
  ClassicPortlet,
} from "./Portlets";

function addCustomGroup(config) {
  const hasCustomGroup = config.blocks.groupBlocksOrder.filter((el) => {
    return el.id === "custom_addons";
  });
  if (hasCustomGroup.length === 0) {
    config.blocks.groupBlocksOrder.push({
      id: "custom_addons",
      title: "Custom addons",
    });
  }
}

const applyConfig = (config) => {
  addCustomGroup(config);
  installDraftEditor(config); // BBB

  config.views.contentTypesViews.Collection = CollectionView;

  config.widgets.id.collection_years = CollectionYears;
  config.widgets.id.blocks = HiddenWidget;
  config.widgets.id.blocks_layout = HiddenWidget;

  config.widgets.widget.object_by_path = PickObject;
  config.widgets.widget.objectlist = ObjectListWidget;
  config.widgets.widget.align = AlignBlockWidget;
  config.widgets.widget.attachedimage = AttachedImageWidget;

  config.blocks.blocksConfig.collection_block = {
    id: "collection_block",
    title: "Collection Listing",
    view: CollectionBlockView,
    edit: CollectionBlockEdit,
    icon: chartIcon,
    group: "custom_addons",
  };

  config.blocks.blocksConfig.news = {
    id: "news",
    title: "News",
    view: NewsView,
    edit: NewsEdit,
    icon: chartIcon,
    group: "custom_addons",
  };

  config.blocks.blocksConfig.imagecards = {
    id: "imagecards",
    title: "Image Cards",
    icon: codeSVG,
    group: "bise",
    view: ImageCardsView,
    edit: ImageCardsEdit,
    restricted: false,
    mostUsed: false,
    sidebarTab: 1,
    security: {
      addPermission: [],
      view: [],
    },
  };

  config.portlets = {
    managers: {
      ...config.portlets?.managers,
      default: PortletManagerRenderer,
    },
    renderers: {
      "portlets.Navigation": NavigationPortlet,
      "portlets.Classic": ClassicPortlet,
      default: DefaultPortlet,
    },
  };

  config.addonReducers = {
    ...config.addonReducers,
    ...addonReducers,
  };

  config.viewlets = [
    {
      path: "/controlpanel",
      component: ControlPanelViewlet,
    },
    ...(config.viewlets || []),
  ];

  return config;
};

export default applyConfig;
