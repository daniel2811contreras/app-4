import { useTranslation } from 'react-i18next'

const Admin = () => {
    const { t } = useTranslation()
    return(
    <div>
        <div>{t('admin.title')} </div>
        <div>{t('admin.greetings', {name: 'daniel'} )} </div>
    </div>
    )
} 

export default Admin