import CompanyPage from './pages/CompanyPage';
import CompanyTable from './pages/CompanyTable';
import CompanyData from './pages/CompanyData';

export default [
    { path: '/data', component: CompanyData },
    { path: '/table', component: CompanyTable },
    { path: '/', component: CompanyPage },
];