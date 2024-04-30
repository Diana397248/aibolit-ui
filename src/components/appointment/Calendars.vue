<template>
  <div>
    <v-calendar
        ref="calendar"
        v-model="value"
        :events="events"
        view-mode="month"
        :weekdays="[  2, 3, 4, 5, 6, 0, 1]"
        hide-week-number="false"
      >
    </v-calendar>
  </div>
</template>

<script setup>
import {useDate} from 'vuetify'
import {onMounted, reactive, ref} from "vue";
import {VCalendar} from 'vuetify/labs/VCalendar'

onMounted(() => {
  const adapter = useDate()
  getEvents({
    start: adapter.startOfDay(adapter.startOfMonth(new Date())),
    end: adapter.endOfDay(adapter.endOfMonth(new Date()))
  })
})

const types = reactive(['month', 'week', 'day'])
const value = ref([new Date()])
const events = reactive([])
const colors = reactive(['blue', 'indigo', 'deep-purple', 'cyan', 'green', 'orange', 'grey darken-1'])
const titles = reactive(['Meeting', 'Holiday', 'PTO', 'Travel', 'Event', 'Birthday', 'Conference', 'Party'])

const getDay = (date) => {
  const WeekDays = ['7', '1', '2', '3', '4', '5', '6'];
  return WeekDays[date.weekday];

}
const getEvents = ({start, end}) => {
  const events = []

  const min = start
  const max = end
  const days = (max.getTime() - min.getTime()) / 86400000
  const eventCount = rnd(days, days + 20)

  for (let i = 0; i < eventCount; i++) {
    const allDay = rnd(0, 3) === 0
    const firstTimestamp = rnd(min.getTime(), max.getTime())
    const first = new Date(firstTimestamp - (firstTimestamp % 900000))
    const secondTimestamp = rnd(2, allDay ? 288 : 8) * 900000
    const second = new Date(first.getTime() + secondTimestamp)

    events.push({
      title: titles[rnd(0, titles.length - 1)],
      start: first,
      end: second,
      color: colors[rnd(0, colors.length - 1)],
      allDay: !allDay,
    })
  }
}

const getEventColor = (event) => {
  return event.color
}

const rnd = (a, b) => {
  return Math.floor((b - a + 1) * Math.random()) + a
}


</script>

<style scoped>

</style>