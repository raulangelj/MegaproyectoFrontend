import { ACTIVITY_PROGRESS } from '@modules/Activities/utils/constants'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export const activitiesSlice = createSlice({
  name: 'activities',
  initialState: {
    userProgress: 0 as number,
    messageToShow: '' as string,
    tempTags: [] as string[],
    tags: [] as string[],
    prevDate: new Date() as Date,
  },
  reducers: {
    addProgress(state, action: PayloadAction<number>) {
      state.userProgress = state.userProgress + action.payload

      const progress = state.userProgress / ACTIVITY_PROGRESS
      if (progress === 1) {
        state.messageToShow =
          'Llevas 1/4 actividades para llegar a la meta diaria'
      } else if (progress === 2) {
        state.messageToShow =
          'Llevas la mitad de actividades para llegar a la meta diaria'
      } else if (progress === 3) {
        state.messageToShow =
          'Llevas 3/4 actividades para llegar a la meta diaria, ya casi'
      } else if (progress === 4) {
        state.messageToShow = 'Haz completado la meta de hoy'
      } else {
        state.messageToShow = 'Ya estás sobre la meta, sigue con el entusiasmo'
      }
    },
    addTag(state, action: PayloadAction<string>) {
      state.tempTags.push(action.payload)
    },
    deleteTag(state, action: PayloadAction<string>) {
      state.tempTags = state.tempTags.filter(tag => tag !== action.payload)
    },
    addTags(state) {
      state.tags = state.tempTags
    },
    setDay(state, action: PayloadAction<Date>) {
      if (!state.prevDate) {
        state.prevDate = new Date()
      }
      if (
        state.prevDate.getDate() !== action.payload.getDate() ||
        state.prevDate.getMonth() !== action.payload.getMonth() ||
        state.prevDate.getFullYear() !== action.payload.getFullYear()
      ) {
        state.userProgress = 0
        state.messageToShow =
          'Llevas 1/4 actividades para llegar a la meta diaria'
        state.prevDate = action.payload
      }
    },
  },
})

export const { addProgress, addTag, deleteTag, addTags, setDay } =
  activitiesSlice.actions
