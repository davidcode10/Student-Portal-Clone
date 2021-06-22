import { Switch, Route, Redirect } from 'react-router-dom'
import Admin from '../pages/Admin/Admin'
import LearnUnit from '../pages/Courses/LearnUnit'
import Week1 from '../pages/Courses/Week1'
import Week2 from '../pages/Courses/Week2'
import Week3 from '../pages/Courses/Week3'
import IndexPage from '../pages/Index/Index-page'

const Routes = ({ fetchUser, storeUser, loggedUser }) => {
    return (
        <Switch>
            <Route path='/' exact render={props => !loggedUser ? <IndexPage {...props} fetchUser={fetchUser} storeUser={storeUser} loggedUser={loggedUser} {...props} history={props.history} /> : <Redirect to='/week1' />} />
            <Route path='/week1' render={props => <Week1 {...props} fetchUser={fetchUser} storeUser={storeUser} loggedUser={loggedUser} {...props} history={props.history} />} />
            <Route path='/week2' render={props => <Week2 {...props} fetchUser={fetchUser} storeUser={storeUser} loggedUser={loggedUser} {...props} history={props.history} />} />
            <Route path='/week3' render={props => <Week3 {...props} fetchUser={fetchUser} storeUser={storeUser} loggedUser={loggedUser} {...props} history={props.history} />} />
            <Route path='/learnUnit/:id' render={props => <LearnUnit {...props} fetchUser={fetchUser} storeUser={storeUser} loggedUser={loggedUser} {...props} history={props.history} />} />
            <Route path='/admin' render={props => <Admin {...props} fetchUser={fetchUser} storeUser={storeUser} loggedUser={loggedUser} {...props} history={props.history} />} />
        </Switch>
    )
}

export default Routes