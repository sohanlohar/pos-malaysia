import { useIntl } from 'react-intl'
import { KTIcon } from '../../../../helpers'
import { SidebarMenuItemWithSub } from './SidebarMenuItemWithSub'
import { SidebarMenuItem } from './SidebarMenuItem'

const SidebarMenuMain = () => {
  const intl = useIntl()

  return (
    <>
      <SidebarMenuItem
        to='/dashboard'
        icon='element-plus'
        title={intl.formatMessage({ id: 'MENU.DASHBOARD' })}
        fontIcon='bi-app-indicator'
      />
       <SidebarMenuItemWithSub to='/courier' title='Courier' hasBullet={false}>
        <SidebarMenuItem to='/courier/pos-laju' icon='switch' title='Poslaju Product' fontIcon='bi-layers' />
        <SidebarMenuItem to='/courier/pos-niaga' icon='switch' title='PosNiaga Product' fontIcon='bi-layers' />
      </SidebarMenuItemWithSub>
    </>
  )
}

export { SidebarMenuMain }
