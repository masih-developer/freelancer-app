import { Listbox, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { HiCheck, HiChevronUpDown } from "react-icons/hi2";
import Loading from "./Loading";

const SelectBox = ({ options, onChange, selected, width, loading }) => {
  return loading ? (
    <div style={{ width: `${width ? width : 250}px` }}>
      <Listbox>
        <div className="relative mt-1">
          <Listbox.Button className="relative h-[42px] w-full cursor-default rounded-lg bg-secondary-0 py-2 pl-10 pr-3 text-right text-sm shadow-md shadow-secondary-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-primary-900 sm:text-base">
            <span className="block truncate text-secondary-900">
              {selected.label}
            </span>
            <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2">
              <HiChevronUpDown
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute z-20 mt-1 max-h-60 w-full overflow-auto rounded-md bg-secondary-0 py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
              <Listbox.Option
                className={({ active }) =>
                  `relative cursor-pointer select-none py-2 pl-10 pr-4 ${
                    active
                      ? "bg-primary-900/10 text-primary-900"
                      : "text-secondary-700"
                  }`
                }
              >
                {selected.label}
              </Listbox.Option>
              <Listbox.Option
                className={({ active }) =>
                  `relative flex cursor-pointer select-none items-center justify-center p-2 ${
                    active
                      ? "bg-primary-900/10 text-primary-900"
                      : "text-secondary-700"
                  }`
                }
              >
                <Loading size={11} />
              </Listbox.Option>
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  ) : (
    <div style={{ width: `${width ? width : 250}px` }}>
      <Listbox value={selected} onChange={onChange}>
        <div className="relative mt-1">
          <Listbox.Button className="relative h-[42px] w-full cursor-default rounded-lg bg-secondary-0 py-2 pl-10 pr-3 text-right text-sm shadow-md shadow-secondary-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-primary-900 sm:text-base">
            <span className="block truncate text-secondary-900">
              {selected.label}
            </span>
            <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2">
              <HiChevronUpDown
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute z-20 mt-1 max-h-60 w-full overflow-auto rounded-md bg-secondary-0 py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
              {options.map((item, index) => (
                <Listbox.Option
                  key={index}
                  className={({ active }) =>
                    `relative cursor-pointer select-none py-2 pl-10 pr-4 ${
                      active
                        ? "bg-primary-900/10 text-primary-900"
                        : "text-secondary-700"
                    }`
                  }
                  value={item}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {item.label}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-primary-900">
                          <HiCheck className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

export default SelectBox;
