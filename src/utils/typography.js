import Typography from 'typography'
import stowLakeTheme from 'typography-theme-stow-lake'
stowLakeTheme.baseFontSize = '16px'
stowLakeTheme.overrideThemeStyles = () => ({
    'body': {
        background: '#F2F2F2',
        color: '#2D3035'
    },
    'a': {
        color: "#282828",
        textDecoration: 'none',
        transition: 'color 350ms ease-in',
        paddingBottom: '2px',
    },
    'a:hover': {
        color: '#F78888',
    },
    'a[aria-current="page"]': {
        color: '#F78888',
    }
})
const typography = new Typography(stowLakeTheme)
export default typography
