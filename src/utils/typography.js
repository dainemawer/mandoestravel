import Typography from 'typography'
import kirkhamTheme from 'typography-theme-kirkham'
kirkhamTheme.baseFontSize = '16px'
kirkhamTheme.overrideThemeStyles = () => ({
    'body': {
        background: '#FAFAFA',
        color: '#2D3035'
    },
    'a': {
        borderBottom: '1px solid transparent',
        color: "#282828",
        textDecoration: 'none',
        transition: 'border-bottom-color 350ms ease-in',
        paddingBottom: '2px',
    },
    'a:hover': {
        borderBottomColor: '#282828',
    },
    'a[aria-current="page"]': {
        borderBottomColor: '#282828',
    }
})
const typography = new Typography(kirkhamTheme)
export default typography
