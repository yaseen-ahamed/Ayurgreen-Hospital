"use client"

import React, { useState, useEffect } from "react";

type TabOption = "programs" | "therapies";

interface ThemeSwitcherProps {
  defaultValue?: TabOption;
  value?: TabOption;
  onValueChange?: (value: TabOption) => void;
}

const themeOptions: { value: TabOption; cOption: string; label: string; icon: React.ReactNode }[] = [
  {
    value: "programs",
    cOption: "1",
    label: "Specialities",
    icon: (
      <svg
        className="switcher__icon"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 36 36"
        style={{ "--c": "currentColor" } as React.CSSProperties}
      >
        <path
          fill="var(--c)"
          fillRule="evenodd"
          d="M18 12a6 6 0 1 1 0 12 6 6 0 0 1 0-12Zm0 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z"
          clipRule="evenodd"
        />
        <path
          fill="var(--c)"
          d="M17 6.038a1 1 0 1 1 2 0v3a1 1 0 0 1-2 0v-3ZM24.244 7.742a1 1 0 1 1 1.618 1.176L24.1 11.345a1 1 0 1 1-1.618-1.176l1.763-2.427ZM29.104 13.379a1 1 0 0 1 .618 1.902l-2.854.927a1 1 0 1 1-.618-1.902l2.854-.927ZM29.722 20.795a1 1 0 0 1-.619 1.902l-2.853-.927a1 1 0 1 1 .618-1.902l2.854.927ZM25.862 27.159a1 1 0 0 1-1.618 1.175l-1.763-2.427a1 1 0 1 1 1.618-1.175l1.763 2.427ZM19 30.038a1 1 0 0 1-2 0v-3a1 1 0 1 1 2 0v3ZM11.755 28.334a1 1 0 0 1-1.618-1.175l1.764-2.427a1 1 0 1 1 1.618 1.175l-1.764 2.427ZM6.896 22.697a1 1 0 1 1-.618-1.902l2.853-.927a1 1 0 1 1 .618 1.902l-2.853.927ZM6.278 15.28a1 1 0 1 1 .618-1.901l2.853.927a1 1 0 1 1-.618 1.902l-2.853-.927ZM10.137 8.918a1 1 0 0 1 1.618-1.176l1.764 2.427a1 1 0 0 1-1.618 1.176l-1.764-2.427Z"
        />
      </svg>
    ),
  },
  {
    value: "therapies",
    cOption: "2",
    label: "Departments",
    icon: (
      <svg
        className="switcher__icon"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 36 36"
        style={{ "--c": "currentColor" } as React.CSSProperties}
      >
        <path
          fill="var(--c)"
          d="M5 21a1 1 0 0 1 1-1h24a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1ZM12 25a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H13a1 1 0 0 1-1-1ZM15 29a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1ZM18 13a6 6 0 0 1 5.915 7h-2.041A4.005 4.005 0 0 0 18 15a4 4 0 0 0-3.874 5h-2.041A6 6 0 0 1 18 13ZM17 7.038a1 1 0 1 1 2 0v3a1 1 0 0 1-2 0v-3ZM24.244 8.742a1 1 0 1 1 1.618 1.176L24.1 12.345a1 1 0 1 1-1.618-1.176l1.763-2.427ZM29.104 14.379a1 1 0 0 1 .618 1.902l-2.854.927a1 1 0 1 1-.618-1.902l2.854-.927ZM6.278 16.28a1 1 0 1 1 .618-1.901l2.853.927a1 1 0 1 1-.618 1.902l-2.853-.927ZM10.137 9.918a1 1 0 0 1 1.618-1.176l1.764 2.427a1 1 0 0 1-1.618 1.176l-1.764-2.427Z"
        />
      </svg>
    ),
  },
];

export function ThemeSwitcher({
  defaultValue = "programs",
  value,
  onValueChange,
}: ThemeSwitcherProps) {
  const [internalValue, setInternalValue] = useState(defaultValue);
  const [previousOption, setPreviousOption] = useState<string | null>(
    themeOptions.find((opt) => opt.value === (value ?? internalValue))
      ?.cOption || null
  );

  const activeValue = value ?? internalValue;

  useEffect(() => {
    if (value !== undefined) {
      setInternalValue(value);
    }
  }, [value]);

  const handleChange = (newValue: TabOption) => {
    const currentOption = themeOptions.find(
      (opt) => opt.value === activeValue
    )?.cOption;
    setPreviousOption(currentOption || null);

    if (onValueChange) {
      onValueChange(newValue);
    } else {
      setInternalValue(newValue);
    }
  };

  return (
    <fieldset
      className="switcher"
      data-previous={
        themeOptions.find((o) => o.value === activeValue)?.cOption
      }
    >
      <legend className="switcher__legend">Choose theme</legend>

      {themeOptions.map((option) => (
        <label key={option.value} className="switcher__option">
          <input
            className="switcher__input"
            type="radio"
            name="theme"
            value={option.value}
            checked={activeValue === option.value}
            onChange={() => handleChange(option.value)}
          />
          {option.icon}
          <span>{option.label}</span>
        </label>
      ))}

      <div className="switcher__filter">
        <svg style={{ position: "absolute", width: 0, height: 0, overflow: "hidden", opacity: 0, pointerEvents: "none" }}>
          <filter id="switcher" primitiveUnits="objectBoundingBox">
            <feImage
              result="map"
              width="100%"
              height="100%"
              x="0"
              y="0"
              href="data:image/webp;base64,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"
            />

            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="0.04"
              result="blur"
            />
            <feDisplacementMap
              id="disp"
              in="blur"
              in2="map"
              scale="0.5"
              xChannelSelector="R"
              yChannelSelector="G"
            ></feDisplacementMap>
          </filter>

          <filter id="toggler" primitiveUnits="objectBoundingBox">
            <feImage
              result="map"
              width="100%"
              height="100%"
              x="0"
              y="0"
              href="data:image/webp;base64,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"
            />

            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="0.01"
              result="blur"
            />
            <feDisplacementMap
              id="disp"
              in="blur"
              in2="map"
              scale="0.5"
              xChannelSelector="R"
              yChannelSelector="G"
            ></feDisplacementMap>
          </filter>
        </svg>
      </div>
    </fieldset>
  );
}
