import { FC, useState } from 'react'
import { Sidebar, updateDOM } from '../../_metronic/layout/components/sidebar'
import { Alert } from 'react-bootstrap'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { Content } from '../../_metronic/layout/components/content'
import clsx from 'clsx'
import { UsersListWrapper } from '../modules/apps/user-management/users-list/UsersList'
import { HeaderWrapper } from '../../_metronic/layout/components/header/HeaderWrapper'

const Home: FC = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      occupation: ''
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .min(3, 'Minimum 3 symbols')
        .max(50, 'Maximum 50 symbols')
        .required('First name is required'),
      lastName: Yup.string()
        .min(3, 'Minimum 3 symbols')
        .max(50, 'Maximum 50 symbols')
        .required('Last name is required'),
      email: Yup.string()
        .email('Wrong email format')
        .min(3, 'Minimum 3 symbols')
        .max(50, 'Maximum 50 symbols')
        .required('Email is required'),
      phone: Yup.string()
        .matches(/^[0-9]+$/, 'Phone number must be numeric')
        .min(10, 'Phone number must be at least 10 digits')
        .required('Phone is required'),
      occupation: Yup.string().required('Occupation is required')
    }),
    onSubmit: (values) => {
      setShowAlert(true)
      console.log(values)
    }
  })
  const [showModal, setShowModal] = useState(false)
  const [showAlert, setShowAlert] = useState(false)
  const handleOpenModal = () => {
    setShowModal(true)
  }

  const handleCloseModal = () => {
    setShowModal(false)
  }
  return (
    <>
      <div className='d-lg-none'>
        <HeaderWrapper />
      </div>
      <Sidebar />
      <Content>
        <div className='d-flex flex-row w-100 align-items-start justify-content-center'>
          <form
            id='kt_modal_add_user_form'
            className='w-50 mt-10  ms-lg-5 mt-lg-0'
            //   className='form'/
            onSubmit={formik.handleSubmit}
            noValidate>
            {/* begin::Scroll */}
            <div className='d-flex flex-column me-n7 pe-7' id='kt_modal_add_user_scroll'>
              <div className='mt-10 mb-10 ms-20'>
                {showAlert && (
                  <Alert variant='success' onClose={() => setShowAlert(false)} dismissible>
                    <Alert.Heading>your data will be secure ,form will be submitted in few seconds ...</Alert.Heading>
                    <p>Change this and that and try again.</p>
                  </Alert>
                )}
                {showModal && (
                  <div
                    className='modal fade show'
                    id='exampleModalScrollable'
                    tabIndex='-1'
                    role='dialog'
                    aria-labelledby='staticBackdrop'
                    aria-hidden='true'
                    style={{ display: 'block' }}>
                    <div className='modal-dialog modal-dialog-scrollable' role='document'>
                      <div className='modal-content'>
                        <div className='modal-header'>
                          <h5 className='modal-title' id='exampleModalLabel'>
                            Modal Title
                          </h5>
                          <span className='close' onClick={handleCloseModal} aria-label='Close'>
                            <i className='bi fs-3 bi-x-circle'></i>
                          </span>
                        </div>
                        <div className='modal-body' style={{ height: '300px' }}>
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                          been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                          galley of type and scrambled it to make a type specimen book. It has survived not only five
                          centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It
                          was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                          passages, and more recently with desktop publishing software like Aldus PageMaker including
                          versions of Lorem Ipsum. Why do we use it? It is a long established fact that a reader will be
                          distracted by the readable content of a page when looking at its layout. The point of using
                          Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using
                          'Content here, content here', making it look like readable English. Many desktop publishing
                          packages and web page editors now use Lorem Ipsum as their default model text, and a search
                          for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have
                          evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the
                          like).
                        </div>
                        <div className='modal-footer'>
                          <button
                            type='button'
                            className='btn btn-light-primary font-weight-bold'
                            onClick={handleCloseModal}>
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {/* First Name */}
                <div className='fv-row mb-7'>
                  <label className='required fw-bold fs-6 mb-2'>First Name</label>
                  <input
                    placeholder='First name'
                    {...formik.getFieldProps('firstName')}
                    type='text'
                    name='firstName'
                    className={clsx(
                      'form-control form-control-solid mb-3 mb-lg-0 border border-black rounded-2',
                      {
                        'is-invalid': formik.touched.firstName && formik.errors.firstName
                      },
                      {
                        'is-valid': formik.touched.firstName && !formik.errors.firstName
                      }
                    )}
                    autoComplete='off'
                    disabled={formik.isSubmitting}
                  />
                  {formik.touched.firstName && formik.errors.firstName && (
                    <div className='fv-plugins-message-container'>
                      <div className='fv-help-block'>
                        <span role='alert'>{formik.errors.firstName}</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Last Name */}
                <div className='fv-row mb-7'>
                  <label className='required fw-bold fs-6 mb-2'>Last Name</label>
                  <input
                    placeholder='Last name'
                    {...formik.getFieldProps('lastName')}
                    type='text'
                    name='lastName'
                    className={clsx(
                      'form-control form-control-solid mb-3 mb-lg-0 border border-black rounded-2',
                      {
                        'is-invalid': formik.touched.lastName && formik.errors.lastName
                      },
                      {
                        'is-valid': formik.touched.lastName && !formik.errors.lastName
                      }
                    )}
                    autoComplete='off'
                    disabled={formik.isSubmitting}
                  />
                  {formik.touched.lastName && formik.errors.lastName && (
                    <div className='fv-plugins-message-container'>
                      <div className='fv-help-block'>
                        <span role='alert'>{formik.errors.lastName}</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Email */}
                <div className='fv-row mb-7'>
                  <label className='required fw-bold fs-6 mb-2'>Email</label>
                  <input
                    placeholder='Email'
                    {...formik.getFieldProps('email')}
                    type='email'
                    name='email'
                    className={clsx(
                      'form-control form-control-solid mb-3 mb-lg-0 border border-black rounded-2',
                      { 'is-invalid': formik.touched.email && formik.errors.email },
                      {
                        'is-valid': formik.touched.email && !formik.errors.email
                      }
                    )}
                    autoComplete='off'
                    disabled={formik.isSubmitting}
                  />
                  {formik.touched.email && formik.errors.email && (
                    <div className='fv-plugins-message-container'>
                      <div className='fv-help-block'>
                        <span role='alert'>{formik.errors.email}</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Phone */}
                <div className='fv-row mb-7'>
                  <label className='required fw-bold fs-6 mb-2'>Phone</label>
                  <input
                    placeholder='Phone'
                    {...formik.getFieldProps('phone')}
                    type='text'
                    name='phone'
                    className={clsx(
                      'form-control form-control-solid mb-3 mb-lg-0 border border-black rounded-2',
                      { 'is-invalid': formik.touched.phone && formik.errors.phone },
                      {
                        'is-valid': formik.touched.phone && !formik.errors.phone
                      }
                    )}
                    autoComplete='off'
                    disabled={formik.isSubmitting}
                  />
                  {formik.touched.phone && formik.errors.phone && (
                    <div className='fv-plugins-message-container'>
                      <div className='fv-help-block'>
                        <span role='alert'>{formik.errors.phone}</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Occupation */}
                <div className='fv-row mb-7'>
                  <label className='required fw-bold fs-6 mb-2'>Occupation</label>
                  <select
                    {...formik.getFieldProps('occupation')}
                    name='occupation'
                    className={clsx(
                      'form-control form-control-solid mb-3 mb-lg-0 border border-black rounded-2',
                      {
                        'is-invalid': formik.touched.occupation && formik.errors.occupation
                      },
                      {
                        'is-valid': formik.touched.occupation && !formik.errors.occupation
                      }
                    )}
                    disabled={formik.isSubmitting}>
                    <option value=''>Select occupation</option>
                    <option value='Doctor'>Doctor</option>
                    <option value='Software engineer'>Software engineer</option>
                    <option value='Rtc'>Rtc</option>
                  </select>
                  {formik.touched.occupation && formik.errors.occupation && (
                    <div className='fv-plugins-message-container'>
                      <div className='fv-help-block'>
                        <span role='alert'>{formik.errors.occupation}</span>
                      </div>
                    </div>
                  )}
                </div>
                <div className='fv-row mb-7 border border-black rounded-2 p-4' onClick={handleOpenModal}>
                  <a
                    className='d-flex flex-row fw-bold align-items-center justify-content-center gap-3 fs-14 fs-6'
                    href='#'>
                    <span>
                      <i className='bi fs-3 bi-arrow-right'></i>{' '}
                    </span>
                    read terms and condition here
                  </a>
                </div>
                {/* Submit Button */}
                <div className='text-center'>
                  <button type='submit' className='btn btn-primary' disabled={formik.isSubmitting}>
                    Submit
                  </button>
                </div>
              </div>
            </div>
            {/* end::Scroll */}
          </form>
          <div className='w-50' style={{ borderLeft: '1px solid black', marginLeft: 15 }}>
            <UsersListWrapper />
          </div>
          {/* <UsersTable/> */}
        </div>
      </Content>
      {/* //   <MasterLayout/> */}
    </>
  )
}

export { Home }
