import { SideItem } from "../../app/js/SideItem.js";
import { SlideList } from "../../app/js/SlideList.js";

const slideList = new SlideList('.sidebar__list', '.sidebar__btn');
const sidebar = new SideItem('#sidebar', '#sidebar-opener', '#sidebar-closer', slideList);
