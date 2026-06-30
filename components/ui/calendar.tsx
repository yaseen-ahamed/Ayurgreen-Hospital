"use client";

import React from "react";
import Link from "next/link";

const dayNames = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

const CalendarDay: React.FC<{ day: number | string; isHeader?: boolean; isToday?: boolean; dayIndex?: number }> = ({
  day,
  isHeader,
  isToday,
  dayIndex = 0,
}) => {
  // Deterministic highlights — avoid Math.random() to prevent hydration mismatch
  const highlights = [3, 5, 10, 12, 13, 17, 19, 20, 21, 24, 27, 29];
  const isHighlighted = !isHeader && !isToday && highlights.includes(dayIndex);

  return (
    <div
      className={`col-span-1 row-span-1 flex h-8 w-8 items-center justify-center ${
        isHeader ? "" : "rounded-xl"
      } ${isToday ? "bg-emerald-600 text-white" : isHighlighted ? "bg-indigo-500/20 text-indigo-700" : "text-gray-500"}`}
    >
      <span className={`font-medium ${isHeader ? "text-xs text-gray-400" : "text-sm"}`}>
        {day}
      </span>
    </div>
  );
};

export function Calendar() {
  const currentDate = new Date();
  const currentMonth = currentDate.toLocaleString("default", { month: "long" });
  const currentYear = currentDate.getFullYear();
  const firstDayOfMonth = new Date(currentYear, currentDate.getMonth(), 1);
  const firstDayOfWeek = firstDayOfMonth.getDay();
  const daysInMonth = new Date(currentYear, currentDate.getMonth() + 1, 0).getDate();
  const today = currentDate.getDate();

  const renderCalendarDays = () => {
    const days: React.ReactNode[] = [
      ...dayNames.map((day) => (
        <CalendarDay key={`header-${day}`} day={day} isHeader />
      )),
      ...Array(firstDayOfWeek).fill(null).map((_, i) => (
        <div key={`empty-start-${i}`} className="col-span-1 row-span-1 h-8 w-8" />
      )),
      ...Array(daysInMonth).fill(null).map((_, i) => (
        <CalendarDay key={`date-${i + 1}`} day={i + 1} isToday={i + 1 === today} dayIndex={i + 1} />
      )),
    ];
    return days;
  };

  return (
    <div className="cu-calendar-widget">
      <div className="cu-calendar-header">
        <span className="cu-calendar-month">{currentMonth}, {currentYear}</span>
        <span className="cu-calendar-dot"></span>
        <span className="cu-calendar-duration">30 min call</span>
      </div>
      <div className="cu-calendar-grid">
        {renderCalendarDays()}
      </div>
    </div>
  );
}
