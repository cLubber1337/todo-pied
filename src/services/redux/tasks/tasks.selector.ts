import { RootState } from '@/services/redux/store.ts'

export const selectAllTasks = (state: RootState) => state.tasks.tasks

export const selectTasksErrors = (state: RootState) => state.tasks.error

export const selectTasksLoading = (state: RootState) => state.tasks.loading

export const selectTasksPriority = (state: RootState) => state.tasks.priority

export const selectTask = (state: RootState) => state.tasks.task

export const selectSortOption = (state: RootState) => state.tasks.sortOption
