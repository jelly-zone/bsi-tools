<template>
    <DatePicker
      ref='datepicker'
      :type='type'
      :format='format'
      :model-value="currentVal"
      :options='options'
      :editable='editable'
      :clearable='clearable'
      @on-change='handleTimeChange'
      
    />
  </template>
    
  <script>
  export default {
    name: 'DateRangePicker',
    props: {
      type: {
        type: String,
        required: true,
        validator: val => ['daterange', 'datetimerange'].includes(val)
      },
      format: {
        type: String,
      },
      placeholder: {
        type: String,
        default: '请选择日期范围'
      },
      start: {
        type: String || Date,
        required: true
      },
      end: {
        type: String || Date,
        required: true
      },
      maxrange: {
        type: Number,
        validator:  val => val >= 2
      },
      editable: {
        type: Boolean,
        default: true
      },
      clearable: {
        type: Boolean,
        default: true
      },
    },
    emits: [
        'update:start',
        'update:end',
    ],
    data() {
      return {
        options: {},
      }
    },
    computed: {
      currentVal() {
        return [this.start, this.end]
      }
    },
    methods: {
      getInitial() {
        if (this.type === "daterange") {
          this.$emit('update:start', this.start + ' 00:00:00')
          this.$emit('update:end', this.end + ' 23:59:59')
        } else {
          this.$emit('update:start', this.start)
          this.$emit('update:end', this.end)
        }
      },
      handleTimeChange(time) {
        console.log('time', time)
        if (!time[0]) return
        if (this.type === "daterange") {
          this.$emit('update:start', time[0] + ' 00:00:00')
          this.$emit('update:end', time[1] + ' 23:59:59')
        } else {
          this.$emit('update:start', time[0])
          this.$emit('update:end', time[1])
        }
      },
      handleNativeMouseup() {
        console.log('child start and end:', this.start, this.end)
        const panel = this.$refs['datepicker'].$refs['pickerPanel']
        console.log('rangeState:', panel['rangeState'])
        panel.handlePickClick = () => {
          let p = this.$refs['datepicker'].$refs['pickerPanel']
          const { from, selecting, to } = p['rangeState']
          console.log('panelInfo:', from, selecting, to)
          const max = this.maxrange
          if (from && !to) {
            this.options = {
              disabledDate(date) {
                const left = new Date(from)
                const right = new Date(from)
                left.setDate(from.getDate() - max + 1)
                right.setDate(from.getDate() + max - 1)
                return !(date >= left && date <= right)
              }
            }
          } else {
            this.options = {
              disabledDate(date) {
                console.log(date)
                return false
              }
            }
          }
        }
      },
    },
  }
  </script>
  <style></style>
  