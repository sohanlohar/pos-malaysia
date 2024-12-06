import clsx from 'clsx'
import { Link } from 'react-router-dom'
import { KTIcon, toAbsoluteUrl } from '../../../helpers'
import { LayoutSetup, useLayout } from '../../core'
import { Header } from './Header'
import { Navbar } from './Navbar'

export function HeaderWrapper() {
  const { config, classes } = useLayout()
  if (config.app?.header?.default?.container === 'fluid') {
    LayoutSetup.classes.headerContainer.push('container-fluid')
  } else {
    LayoutSetup.classes.headerContainer.push('container-xxl')
  }
  if (!config.app?.header?.display) {
    return null
  }

  console.log(config.layoutType)
  return (
    <div
      id='kt_app_header'
      className='app-header'
      data-kt-sticky='true'
      data-kt-sticky-activate='{default: true, lg: true}'
      data-kt-sticky-name='app-header-minimize'
      data-kt-sticky-offset='{default: "200px", lg: "0"}'
      data-kt-sticky-animation='false'>
      <div
        id='kt_app_header_container'
        className={clsx(
          'app-container',
          classes.headerContainer.join(' '),
          config.app?.header?.default?.containerClass
        )}>
        {config.app.sidebar?.display && (
          <>
            {config.layoutType !== 'dark-header' && config.layoutType !== 'light-header' ? (
              <div className='d-flex align-items-center d-lg-none ms-n2 me-2' title='Show sidebar menu'>
                <div className='btn btn-icon btn-active-color-primary w-35px h-35px' id='kt_app_sidebar_mobile_toggle'>
                  <KTIcon iconName='abstract-14' className=' fs-1' />
                </div>
                <div className='d-flex align-items-center flex-grow-1 flex-lg-grow-0'>
                  <Link to='/dashboard' className='d-lg-none'>
                    <img alt='Logo' src={toAbsoluteUrl('media/logos/pos_logo_sm.svg')} className='h-30px' />
                  </Link>
                </div>
              </div>
            ) : null}
          </>
        )}

        <div id='kt_app_header_wrapper' className={'d-flex align-items-stretch'}>
          <Navbar />
        </div>
      </div>
    </div>
  )
}
