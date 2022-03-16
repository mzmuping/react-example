import { Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Count from './pages/Count'
import Person from './pages/Person'
const routes = [
    {
        path: '/home',
        component: Home,
        routes: [
            {
                path: '/about',
                component: About,
            },
            {
                path: '/count',
                component: Count,
            },
        ]
    },
    {
        path: '/about',
        component: About,
    },
    {
        path: '/person',
        component: Person
    }
]

export const CreateRoute = route => (
    <Route
        path={route.path}
        render={props => {
            console.log(props, route)
            return (
                // pass the sub-routes down to keep nesting
                <route.component {...props} routes={route.routes} />
            )
        }}
    />
);

export default routes