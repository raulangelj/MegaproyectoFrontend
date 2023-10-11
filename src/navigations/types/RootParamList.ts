/**
import { Activities } from '@navigations/AppNavigator/Groups/Activities';
 * Here we should have all the navigation tree, and all possible params
 * So we can have typescript autocomplete in all screens and params
 * This file was created when the new ref-app development was started, and
 * we should be adding more items progressively
 */

import { Activity } from '@modules/Activities/interfaces/activities'

// Not defining the screen names here because they come dynamically from API and all screens have the same params

export type RootStackParamList = {
  // Activities
  ActivitiesMenu: undefined
  ActivitiesShuffle: undefined
  ActivitiesList: undefined
  SimpleActivity: { activity: Activity }
  Diario: { activity: Activity }
  SelectPreffered: undefined
  // ----------

  Chat: undefined
  SignIn: undefined
  SignUp: undefined
  TabNavigator: { screen: string } | undefined
  PsychologyNavigator: { screen: string } | undefined
  Report: undefined
  HistoryView: { id: number; report: any } | undefined
  Landing: undefined
  Profile: undefined
  Activities: undefined
}

export type ReportTabsParamList = {
  Report: undefined
  HistoryReportMain: undefined
  MainReport: undefined
  Main: undefined
  HistoryView: undefined
}

export type PsychologyTabsParamList = {
  PatientList: undefined
  PatientList1: undefined
  QuestionsList1: undefined
  QuestionsList: undefined
  Statistics: undefined
  Statistics1: undefined
}

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
