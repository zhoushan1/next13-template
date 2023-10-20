import { Fragment, useState } from 'react';
import { Combobox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';
import { OptionProp, ValueProp } from './Select';
import { cn } from '@/utils/common';

interface Props {
  className?: string;
  options: OptionProp[];
  value: ValueProp;
  onChange: (value: ValueProp, option: OptionProp) => void;
}

export default function SearchSelect({
  className,
  options,
  value,
  onChange,
}: Props) {
  const [query, setQuery] = useState('');
  const curSelectOption = options.find((option) => option.value === value);

  const filteredPeople =
    query === ''
      ? options
      : options.filter((option) => {
          if (typeof option.label === 'string') {
            return option.label
              ?.toLowerCase()
              .replace(/\s+/g, '')
              .includes(query.toLowerCase().replace(/\s+/g, ''));
          }
          return true;
        });

  return (
    <div className={cn('w-72', className)}>
      <Combobox
        value={curSelectOption}
        onChange={(op) => {
          onChange?.(op.value, op);
        }}
      >
        <div className="relative mt-1">
          <div className="relative w-full cursor-default overflow-hidden rounded-lg border bg-white text-left shadow-md  focus-visible:border-indigo-500 sm:text-sm">
            <Combobox.Input
              className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900  focus:outline"
              displayValue={(option) => option?.label || ''}
              onChange={(event) => setQuery(event.target.value)}
            />
            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </Combobox.Button>
          </div>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery('')}
          >
            <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {filteredPeople.length === 0 && query !== '' ? (
                <div className="relative cursor-default select-none px-4 py-2 text-gray-700">
                  Nothing found.
                </div>
              ) : (
                filteredPeople.map((option) => (
                  <Combobox.Option
                    key={option.value}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? 'bg-indigo-600 text-white' : 'text-gray-900'
                      }`
                    }
                    value={option}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? 'font-medium' : 'font-normal'
                          }`}
                        >
                          {option.label}
                        </span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? 'text-white' : 'text-indigo-600'
                            }`}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
}
