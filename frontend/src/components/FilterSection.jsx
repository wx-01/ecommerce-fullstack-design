import { Accordion } from "radix-ui";
import { Checkbox } from "radix-ui";
import {
  ChevronDownIcon,
  DividerHorizontalIcon,
  CheckIcon,
} from "@radix-ui/react-icons";

const FilterSection = ({ title, options, checked, setChecked }) => (
  <Accordion.Root type="multiple">
    <Accordion.Item value={title} className="border-t border-t-gray-400">
      <Accordion.Header>
        <Accordion.Trigger className="flex items-center justify-between w-full">
          <span>{title}</span>
          <ChevronDownIcon className="AccordionChevron" aria-hidden />
        </Accordion.Trigger>
      </Accordion.Header>
      <Accordion.Content>
        {options.map((option) => (
          <div className="flex flex-row items-center gap-2 text-sm text-gray-500" key={option}>
            <Checkbox.Root
              checked={checked.includes(option)}
              onCheckedChange={() => {
                setChecked((prev) =>
                  prev.includes(option)
                    ? prev.filter((c) => c !== option)
                    : [...prev, option]
                );
              }}
              className="CheckboxRoot"
            >
              <Checkbox.Indicator className="CheckboxIndicator">
                {checked.includes(option) && <CheckIcon className="size-5" />}
              </Checkbox.Indicator>
            </Checkbox.Root>
            <button
              type="button"
              onClick={() => {
                setChecked((prev) =>
                  prev.includes(option)
                    ? prev.filter((c) => c !== option)
                    : [...prev, option]
                );
              }}
            >
              {option}
            </button>
          </div>
        ))}
      </Accordion.Content>
    </Accordion.Item>
  </Accordion.Root>
);

export default FilterSection;