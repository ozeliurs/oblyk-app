import GymSpaceView from '@/views/gymSpaces/GymSpaceView'
import GymSpaceNewView from '@/views/gymSpaces/actions/GymSpaceNewView'
import GymSpaceEditView from '@/views/gymSpaces/actions/GymSpaceEditView'
import GymSpacePlanView from '@/views/gymSpaces/actions/GymSpacePlanView'
import SelectGymSectorView from '@/views/gymRoutes/SelectGymSectorView'

export default [
  {
    path: '/gyms/:gymId/:gymSlug/spaces/:gymSpaceId/:gymSpaceSlug/plan',
    component: GymSpaceView,
    props: true,
    meta: {
      objectName: 'gym',
      showAvatar: true
    }
  },
  {
    path: '/gyms/:gymId/:gymSlug/spaces/:gymSpaceId/:gymSpaceSlug/edit',
    component: GymSpaceEditView,
    props: true,
    meta: {
      requiresAuth: true,
      requiresGymAdministrator: true,
      objectName: 'gym',
      showAvatar: true
    }
  },
  {
    path: '/gyms/:gymId/:gymSlug/spaces/:gymSpaceId/:gymSpaceSlug/upload-plan',
    component: GymSpacePlanView,
    props: true,
    meta: {
      requiresAuth: true,
      requiresGymAdministrator: true,
      objectName: 'gym',
      showAvatar: true
    }
  },
  {
    path: '/gyms/:gymId/:gymSlug/spaces/new',
    component: GymSpaceNewView,
    props: true,
    meta: {
      requiresAuth: true,
      requiresGymAdministrator: true,
      objectName: 'gym',
      showAvatar: true
    }
  },
  {
    path: '/gyms/:gymId/:gymSlug/spaces/:gymSpaceId/:gymSpaceSlug/select-sector',
    component: SelectGymSectorView,
    props: true,
    meta: {
      requiresAuth: true,
      requiresGymAdministrator: true,
      objectName: 'gym',
      showAvatar: true
    }
  }
]
