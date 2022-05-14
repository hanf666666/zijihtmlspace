// import login from "./Login";
// import pageNotFound from "./PageNotFound";
// import dashbord from "./Dashbord";
// import useradd from "./Business/useradd";
// import useredit from "./Business/useredit";
import Loadable from 'react-loadable';
import Loading from '../../src/component/Loading/index';


const login = Loadable({
    loader: () => import('./Login'),
    loading: Loading,
});
const pageNotFound = Loadable({
    loader: () => import('./PageNotFound'),
    loading: Loading,
});
const dashbord = Loadable({
    loader: () => import('./Dashbord'),
    loading: Loading,
});
const useradd = Loadable({
    loader: () => import('./Business/useradd'),
    loading: Loading,
});
const useredit = Loadable({
    loader: () => import('./Business/useredit'),
    loading: Loading,
});
export {
    login,
    pageNotFound,
    dashbord,
    useradd,
    useredit
}