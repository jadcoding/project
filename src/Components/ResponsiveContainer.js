import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import {
  Button,
  Container,
  // Divider,
  // Grid,
  // Header,
  Icon,
  // Image,
  // List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react'


/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
class DesktopContainer extends Component {
  state = {}

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  render() {
    const { children } = this.props
    const { fixed } = this.state
    
    return (
      <Responsive {...Responsive.onlyComputer}>
        <Visibility once={false} onBottomPassed={this.showFixedMenu} onBottomPassedReverse={this.hideFixedMenu}>
          <Segment inverted textAlign='center' style={{ padding: '1em 0em' }} vertical>
            <Menu
              fixed={fixed ? 'top' : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size='large'
            >
              <Container>
                <Menu.Item as='span'>
                    <Link to='/home'>Home</Link>
                </Menu.Item>
                <Menu.Item as='span'>
                    <Link to='/Exercices'>Exercices</Link>
                </Menu.Item>
                {/* <Menu.Item as='span'>
                    <Link to='/Chat'>Nutrition</Link>
                </Menu.Item> */}
                {/* <Menu.Item as='span'>
                    <Link to='/Workouts'>Workouts</Link>
                </Menu.Item> */}
                
            {/* <Menu.Item as='span'>
            <Link to='/myworkouts'>My List</Link>
            </Menu.Item> */}
                <Menu.Item position='right'>
                  {/* <Button as='span' inverted={!fixed}>
                    <Link to='/home'>Sign In</Link>
                  </Button> */}
                  <Button as='span' inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em' }}>
                    <Link to='/myworkouts'>My Workout</Link>
                  </Button>
                </Menu.Item>
              </Container>
            </Menu>
          </Segment>
        </Visibility>
        {children}
      </Responsive>
    )
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
}

class MobileContainer extends Component {
  state = {}

  handlePusherClick = () => {
    const { sidebarOpened } = this.state

    if (sidebarOpened) this.setState({ sidebarOpened: false })
  }

  handleToggle = () => this.setState({ sidebarOpened: !this.state.sidebarOpened })

  render() {
    const { children } = this.props
    const { sidebarOpened } = this.state

    return (
      <Responsive {...Responsive.onlyMobile}>
        <Sidebar.Pushable>
          <Sidebar as={Menu} animation='uncover' inverted vertical visible={sidebarOpened}>
            <Menu.Item as='span' active>
            <Link to='/home'>Home</Link>
            </Menu.Item>
            
            <Menu.Item as='span'>
            <Link to='/Exercices'>Exercices</Link>
            </Menu.Item>
            {/* <Menu.Item as='span'>
            <Link to='/Chat'>Nutrition</Link>
            </Menu.Item> */}
            {/* <Menu.Item as='span'>
            <Link to='/Workout'>Workouts</Link>
            </Menu.Item> */}
            {/* <Menu.Item as='span'>
            <Link to='/myworkouts'>My List</Link>
            </Menu.Item> */}
            {/* <Menu.Item as='span'>Contact Trainer</Menu.Item> */}
            {/* <Menu.Item as='span'>Sign Up</Menu.Item> */}
          </Sidebar>

          <Sidebar.Pusher dimmed={sidebarOpened} onClick={this.handlePusherClick} style={{ minHeight: '100vh' }}>
            <Segment inverted textAlign='center' style={{ minHeight: 0, padding: '1em 0em' }} vertical>
              <Container>
                <Menu inverted pointing secondary size='large'>
                  <Menu.Item onClick={this.handleToggle}>
                    <Icon name='sidebar' />
                  </Menu.Item>
                  <Menu.Item position='right'>
                    <Button as='span' inverted><Link to='/myworkouts'>My Workout</Link></Button>
                    {/* <Button as='span' inverted style={{ marginLeft: '0.5em' }}>Sign Up</Button> */}
                  </Menu.Item>
                </Menu>
              </Container>
            </Segment>

            {children}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Responsive>
    )
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node,
}

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}

export default ResponsiveContainer