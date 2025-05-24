"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import {
  FilterForm,
  filterFormDefaultValues,
} from "@/app/warehouse/FilterModal";
import type { DateSelectArg, EventInput } from "@fullcalendar/core";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

const BookingsPage: React.FC = () => {
  const [events, setEvents] = useState([
    {
      id: "1",
      title: "Разгрузка",
      start: "2025-05-18T06:00:00",
      end: "2025-05-18T07:00:00",
      extendedProps: { gate: "A" },
    },
    {
      id: "1",
      title: "Разгрузка",
      start: "2025-05-18T07:00:00",
      end: "2025-05-18T08:00:00",
      extendedProps: { gate: "A" },
    },
    {
      id: "1",
      title: "Разгрузка",
      start: "2025-05-18T08:00:00",
      end: "2025-05-18T09:00:00",
      extendedProps: { gate: "A" },
    },
    {
      id: "1",
      title: "Разгрузка",
      start: "2025-05-18T09:00:00",
      end: "2025-05-18T11:00:00",
      extendedProps: { gate: "A" },
    },
    {
      id: "1",
      title: "Разгрузка",
      start: "2025-05-18T15:00:00",
      end: "2025-05-18T16:00:00",
      extendedProps: { gate: "A" },
    },
    {
      id: "1",
      title: "Разгрузка",
      start: "2025-05-19T06:00:00",
      end: "2025-05-19T07:00:00",
      extendedProps: { gate: "A" },
    },
    {
      id: "1",
      title: "Разгрузка",
      start: "2025-05-19T11:00:00",
      end: "2025-05-19T12:00:00",
      extendedProps: { gate: "A" },
    },
    {
      id: "1",
      title: "Разгрузка",
      start: "2025-05-19T12:00:00",
      end: "2025-05-19T13:00:00",
      extendedProps: { gate: "A" },
    },
    {
      id: "1",
      title: "Разгрузка",
      start: "2025-05-19T13:00:00",
      end: "2025-05-19T14:00:00",
      extendedProps: { gate: "A" },
    },
    {
      id: "1",
      title: "Разгрузка",
      start: "2025-05-19T16:00:00",
      end: "2025-05-19T17:00:00:00",
      extendedProps: { gate: "A" },
    },
    {
      id: "1",
      title: "Разгрузка",
      start: "2025-05-20T08:00:00",
      end: "2025-05-20T09:00:00",
      extendedProps: { gate: "A" },
    },
    {
      id: "1",
      title: "Разгрузка",
      start: "2025-05-21T09:00:00",
      end: "2025-05-21T10:00:00",
      extendedProps: { gate: "A" },
    },
    {
      id: "1",
      title: "Разгрузка",
      start: "2025-05-21T13:00:00",
      end: "2025-05-21T15:00:00",
      extendedProps: { gate: "A" },
    },
    {
      id: "1",
      title: "Разгрузка",
      start: "2025-05-21T15:00:00",
      end: "2025-05-21T16:00:00",
      extendedProps: { gate: "A" },
    },
    {
      id: "2",
      title: "Разгрузка",
      start: "2025-05-22T11:30:00",
      end: "2025-05-22T13:00:00",
      extendedProps: { gate: "B" },
    },
    {
      id: "3",
      title: "Разгрузка",
      start: "2025-05-23T14:00:00",
      end: "2025-05-23T15:00:00",
      extendedProps: { gate: "A" },
    },
    {
      id: "3",
      title: "Разгрузка",
      start: "2025-05-23T08:00:00",
      end: "2025-05-23T10:00:00",
      extendedProps: { gate: "A" },
    },
    {
      id: "4",
      title: "Разгрузка",
      start: "2025-05-24T16:00:00",
      end: "2025-05-24T17:30:00",
      extendedProps: { gate: "C" },
    },
  ]);

  function handleDateSelect(selectInfo) {
    // your select handler
  }

  function handleEventClick(clickInfo) {
    // your click handler
  }

  return (
    <DefaultLayout>
      <Breadcrumb pageName="Bookings" />
      {/*Filter controls (gate, date range, etc.)*/}
      {/*<div className="my-4">*/}
      {/*  <FilterForm filters={filters} onChange={setFilters} />*/}
      {/*</div>*/}
      {/* Scheduler */}

      {/*<div className="flex justify-end gap-5 pb-4 xl:gap-5">*/}
      {/*  <button className="inline-flex items-center justify-center rounded-md bg-meta-3 px-10 py-4 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10">*/}
      {/*    Add booking*/}
      {/*  </button>*/}
      {/*</div>*/}
      <div className="rounded-2xl bg-white p-4 shadow">
        <FullCalendar
          plugins={[timeGridPlugin, interactionPlugin]}
          initialView="timeGridWeek"
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "timeGridDay,timeGridWeek",
          }}
          allDaySlot={false}
          slotMinTime="06:00:00"
          slotMaxTime="22:00:00"
          selectable={true}
          selectMirror={true}
          select={handleDateSelect}
          eventClick={handleEventClick}
          events={events}
          height="auto"
        />
      </div>
    </DefaultLayout>
  );
};

export default BookingsPage;
