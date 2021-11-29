import HeaderStyles from '../styles/Header.module.css'

const Header = () => {
    return (
        <div >
            <h1 className={HeaderStyles.title}>
                <span>WebDev</span>  News
            </h1>
            <p>
                keep up to date with lastest web news
            </p>

        </div>
    )
}


export default Header