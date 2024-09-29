



declare module '@fullcalendar/core' {
    export const version = "<%= version %>";
    export { OptionsInput } from '@fullcalendar/core/types/input-types';
    export { EventInput, EventDef, EventDefHash, EventInstance, EventInstanceHash, parseEventDef, createEventInstance, EventTuple } from '@fullcalendar/core/structs/event';
    export { BusinessHoursInput, parseBusinessHours } from '@fullcalendar/core/structs/business-hours';
    export { applyAll, debounce, padStart, isInt, capitaliseFirstLetter, parseFieldSpecs, compareByFieldSpecs, compareByFieldSpec, flexibleCompare, computeVisibleDayRange, refineProps, matchCellWidths, uncompensateScroll, compensateScroll, subtractInnerElHeight, isMultiDayRange, distributeHeight, undistributeHeight, preventSelection, allowSelection, preventContextMenu, allowContextMenu, compareNumbers, enableCursor, disableCursor, diffDates } from '@fullcalendar/core/util/misc';
    export { htmlEscape, cssToStr } from '@fullcalendar/core/util/html';
    export { removeExact, isArraysEqual } from '@fullcalendar/core/util/array';
    export { memoize, memoizeOutput } from '@fullcalendar/core/util/memoize';
    export { memoizeRendering, MemoizedRendering } from '@fullcalendar/core/component/memoized-rendering';
    export { intersectRects, Rect, pointInsideRect, constrainPoint, getRectCenter, diffPoints, Point, translateRect } from '@fullcalendar/core/util/geom';
    export { mapHash, filterHash, isPropsEqual } from '@fullcalendar/core/util/object';
    export { findElements, findChildren, htmlToElement, createElement, insertAfterElement, prependToElement, removeElement, appendToElement, applyStyle, applyStyleProp, elementMatches, elementClosest, forceClassName } from '@fullcalendar/core/util/dom-manip';
    export { EventStore, filterEventStoreDefs, createEmptyEventStore, mergeEventStores, getRelevantEvents, eventTupleToStore } from '@fullcalendar/core/structs/event-store';
    export { EventUiHash, EventUi, processScopedUiProps, combineEventUis } from '@fullcalendar/core/component/event-ui';
    export { default as Splitter, SplittableProps } from '@fullcalendar/core/component/event-splitting';
    export { buildGotoAnchorHtml, getAllDayHtml, getDayClasses } from '@fullcalendar/core/component/date-rendering';
    export { preventDefault, listenBySelector, whenTransitionDone } from '@fullcalendar/core/util/dom-event';
    export { computeInnerRect, computeEdges, computeHeightAndMargins, getClippingParents, computeClippingRect, computeRect } from '@fullcalendar/core/util/dom-geom';
    export { unpromisify } from '@fullcalendar/core/util/promise';
    export { default as EmitterMixin, EmitterInterface } from '@fullcalendar/core/common/EmitterMixin';
    export { DateRange, rangeContainsMarker, intersectRanges, rangesEqual, rangesIntersect, rangeContainsRange } from '@fullcalendar/core/datelib/date-range';
    export { default as Mixin } from '@fullcalendar/core/common/Mixin';
    export { default as PositionCache } from '@fullcalendar/core/common/PositionCache';
    export { default as ScrollComponent, ScrollbarWidths } from '@fullcalendar/core/common/ScrollComponent';
    export { ScrollController, ElementScrollController, WindowScrollController } from '@fullcalendar/core/common/scroll-controller';
    export { default as Theme } from '@fullcalendar/core/theme/Theme';
    export { default as Component, ComponentContext } from '@fullcalendar/core/component/Component';
    export { default as DateComponent, Seg, EventSegUiInteractionState } from '@fullcalendar/core/component/DateComponent';
    export { default as Calendar, DatePointTransform, DateSpanTransform, DateSelectionApi } from '@fullcalendar/core/Calendar';
    export { default as View, ViewProps } from '@fullcalendar/core/View';
    export { default as FgEventRenderer, buildSegCompareObj } from '@fullcalendar/core/component/renderers/FgEventRenderer';
    export { default as FillRenderer } from '@fullcalendar/core/component/renderers/FillRenderer';
    export { default as DateProfileGenerator, DateProfile } from '@fullcalendar/core/DateProfileGenerator';
    export { ViewDef } from '@fullcalendar/core/structs/view-def';
    export { ViewSpec } from '@fullcalendar/core/structs/view-spec';
    export { DateSpan, DateSpanApi, DatePointApi, isDateSpansEqual } from '@fullcalendar/core/structs/date-span';
    export { DateMarker, addDays, startOfDay, addMs, addWeeks, diffWeeks, diffWholeWeeks, diffWholeDays, diffDayAndTime, diffDays, isValidDate } from '@fullcalendar/core/datelib/marker';
    export { Duration, createDuration, isSingleDay, multiplyDuration, addDurations, asRoughMinutes, asRoughSeconds, asRoughMs, wholeDivideDurations, greatestDurationDenominator } from '@fullcalendar/core/datelib/duration';
    export { DateEnv, DateMarkerMeta } from '@fullcalendar/core/datelib/env';
    export { DateFormatter, createFormatter, VerboseFormattingArg, formatIsoTimeString } from '@fullcalendar/core/datelib/formatting';
    export { NamedTimeZoneImpl } from '@fullcalendar/core/datelib/timezone';
    export { parse as parseMarker } from '@fullcalendar/core/datelib/parsing';
    export { EventSourceDef, EventSource, EventSourceHash } from '@fullcalendar/core/structs/event-source';
    export { Interaction, InteractionSettings, interactionSettingsToStore, interactionSettingsStore, InteractionSettingsStore } from '@fullcalendar/core/interactions/interaction';
    export { PointerDragEvent } from '@fullcalendar/core/interactions/pointer';
    export { Hit } from '@fullcalendar/core/interactions/hit';
    export { dateSelectionJoinTransformer } from '@fullcalendar/core/interactions/date-selecting';
    export { eventDragMutationMassager, EventDropTransformers } from '@fullcalendar/core/interactions/event-dragging';
    export { EventResizeJoinTransforms } from '@fullcalendar/core/interactions/event-resizing';
    export { default as ElementDragging } from '@fullcalendar/core/interactions/ElementDragging';
    export { formatDate, formatRange } from '@fullcalendar/core/formatting-api';
    export { globalDefaults, config } from '@fullcalendar/core/options';
    export { RecurringType, ParsedRecurring } from '@fullcalendar/core/structs/recurring-event';
    export { DragMetaInput, DragMeta, parseDragMeta } from '@fullcalendar/core/structs/drag-meta';
    export { createPlugin, PluginDef, PluginDefInput, ViewPropsTransformer, ViewContainerModifier } from '@fullcalendar/core/plugin-system';
    export { reducerFunc, Action, CalendarState } from '@fullcalendar/core/reducers/types';
    export { CalendarComponentProps } from '@fullcalendar/core/CalendarComponent';
    export { default as DayHeader } from '@fullcalendar/core/common/DayHeader';
    export { computeFallbackHeaderFormat, renderDateCell } from '@fullcalendar/core/common/table-utils';
    export { default as DaySeries } from '@fullcalendar/core/common/DaySeries';
    export { EventInteractionState } from '@fullcalendar/core/interactions/event-interaction-state';
    export { EventRenderRange, sliceEventStore, hasBgRendering, getElSeg } from '@fullcalendar/core/component/event-rendering';
    export { default as DayTable, DayTableSeg, DayTableCell } from '@fullcalendar/core/common/DayTable';
    export { default as Slicer, SlicedProps } from '@fullcalendar/core/common/slicing-utils';
    export { EventMutation, applyMutationToEventStore } from '@fullcalendar/core/structs/event-mutation';
    export { Constraint, ConstraintInput, AllowFunc, isPropsValid, isInteractionValid } from '@fullcalendar/core/validation';
    export { default as EventApi } from '@fullcalendar/core/api/EventApi';
    export { default as requestJson } from '@fullcalendar/core/util/requestJson';
}

declare module '@fullcalendar/core/types/input-types' {
    import View from '@fullcalendar/core/View';
    import { EventSourceInput, EventInputTransformer } from '@fullcalendar/core/structs/event-source';
    import { Duration, DurationInput } from '@fullcalendar/core/datelib/duration';
    import { DateInput } from '@fullcalendar/core/datelib/env';
    import { FormatterInput } from '@fullcalendar/core/datelib/formatting';
    import { DateRangeInput } from '@fullcalendar/core/datelib/date-range';
    import { BusinessHoursInput } from '@fullcalendar/core/structs/business-hours';
    import EventApi from '@fullcalendar/core/api/EventApi';
    import { AllowFunc, ConstraintInput, OverlapFunc } from '@fullcalendar/core/validation';
    import { PluginDef } from '@fullcalendar/core/plugin-system';
    import { LocaleSingularArg, RawLocale } from '@fullcalendar/core/datelib/locale';
    export interface ToolbarInput {
        left?: string;
        center?: string;
        right?: string;
    }
    export interface CustomButtonInput {
        text: string;
        icon?: string;
        themeIcon?: string;
        bootstrapFontAwesome?: string;
        click(element: HTMLElement): void;
    }
    export interface ButtonIconsInput {
        prev?: string;
        next?: string;
        prevYear?: string;
        nextYear?: string;
    }
    export interface ButtonTextCompoundInput {
        prev?: string;
        next?: string;
        prevYear?: string;
        nextYear?: string;
        today?: string;
        month?: string;
        week?: string;
        day?: string;
        [viewId: string]: string | undefined;
    }
    export interface EventSegment {
        event: EventApi;
        start: Date;
        end: Date;
        isStart: boolean;
        isEnd: boolean;
    }
    export interface CellInfo {
        date: Date;
        dayEl: HTMLElement;
        moreEl: HTMLElement;
        segs: EventSegment[];
        hiddenSegs: EventSegment[];
    }
    export interface DropInfo {
        start: Date;
        end: Date;
    }
    export type EventHandlerName = '_init' | 'selectAllow' | 'eventAllow' | 'eventDataTransform' | 'datesRender' | 'datesDestroy' | 'dayRender' | 'windowResize' | 'dateClick' | 'eventClick' | 'eventMouseEnter' | 'eventMouseLeave' | 'select' | 'unselect' | 'loading' | 'eventRender' | 'eventPositioned' | '_eventsPositioned' | 'eventDestroy' | 'eventDragStart' | 'eventDragStop' | 'eventDrop' | '_destroyed' | 'drop' | 'eventResizeStart' | 'eventResizeStop' | 'eventResize' | 'eventReceive' | 'eventLeave' | 'viewSkeletonRender' | 'viewSkeletonDestroy' | '_noEventDrop' | '_noEventResize' | 'eventLimitClick' | 'resourceRender';
    export type EventHandlerArgs<T extends EventHandlerName> = Parameters<Extract<OptionsInput[T], (...args: any[]) => any>>;
    export type EventHandlerArg<T extends EventHandlerName> = EventHandlerArgs<T>[0];
    export interface OptionsInputBase {
        header?: boolean | ToolbarInput;
        footer?: boolean | ToolbarInput;
        customButtons?: {
            [name: string]: CustomButtonInput;
        };
        buttonIcons?: boolean | ButtonIconsInput;
        themeSystem?: 'standard' | string;
        bootstrapFontAwesome?: boolean | ButtonIconsInput;
        firstDay?: number;
        dir?: 'ltr' | 'rtl' | 'auto';
        weekends?: boolean;
        hiddenDays?: number[];
        fixedWeekCount?: boolean;
        weekNumbers?: boolean;
        weekNumbersWithinDays?: boolean;
        weekNumberCalculation?: 'local' | 'ISO' | ((m: Date) => number);
        businessHours?: BusinessHoursInput;
        showNonCurrentDates?: boolean;
        height?: number | 'auto' | 'parent' | (() => number);
        contentHeight?: number | 'auto' | (() => number);
        aspectRatio?: number;
        handleWindowResize?: boolean;
        windowResizeDelay?: number;
        eventLimit?: boolean | number;
        eventLimitClick?: 'popover' | 'week' | 'day' | 'timeGridWeek' | 'timeGridDay' | string | ((arg: {
            date: Date;
            allDay: boolean;
            dayEl: HTMLElement;
            moreEl: HTMLElement;
            segs: any[];
            hiddenSegs: any[];
            jsEvent: MouseEvent;
            view: View;
        }) => void);
        timeZone?: string | boolean;
        now?: DateInput | (() => DateInput);
        defaultView?: string;
        allDaySlot?: boolean;
        allDayText?: string;
        slotDuration?: DurationInput;
        slotLabelFormat?: FormatterInput;
        slotLabelInterval?: DurationInput;
        snapDuration?: DurationInput;
        scrollTime?: DurationInput;
        minTime?: DurationInput;
        maxTime?: DurationInput;
        slotEventOverlap?: boolean;
        listDayFormat?: FormatterInput | boolean;
        listDayAltFormat?: FormatterInput | boolean;
        noEventsMessage?: string;
        defaultDate?: DateInput;
        nowIndicator?: boolean;
        visibleRange?: ((currentDate: Date) => DateRangeInput) | DateRangeInput;
        validRange?: DateRangeInput;
        dateIncrement?: DurationInput;
        dateAlignment?: string;
        duration?: DurationInput;
        dayCount?: number;
        locales?: RawLocale[];
        locale?: LocaleSingularArg;
        eventTimeFormat?: FormatterInput;
        columnHeader?: boolean;
        columnHeaderFormat?: FormatterInput;
        columnHeaderText?: string | ((date: DateInput) => string);
        columnHeaderHtml?: string | ((date: DateInput) => string);
        titleFormat?: FormatterInput;
        weekLabel?: string;
        displayEventTime?: boolean;
        displayEventEnd?: boolean;
        eventLimitText?: string | ((eventCnt: number) => string);
        dayPopoverFormat?: FormatterInput;
        navLinks?: boolean;
        navLinkDayClick?: string | ((date: Date, jsEvent: Event) => void);
        navLinkWeekClick?: string | ((weekStart: any, jsEvent: Event) => void);
        selectable?: boolean;
        selectMirror?: boolean;
        unselectAuto?: boolean;
        unselectCancel?: string;
        defaultAllDayEventDuration?: DurationInput;
        defaultTimedEventDuration?: DurationInput;
        cmdFormatter?: string;
        defaultRangeSeparator?: string;
        selectConstraint?: ConstraintInput;
        selectOverlap?: boolean | OverlapFunc;
        selectAllow?: AllowFunc;
        editable?: boolean;
        eventStartEditable?: boolean;
        eventDurationEditable?: boolean;
        eventConstraint?: ConstraintInput;
        eventOverlap?: boolean | OverlapFunc;
        eventAllow?: AllowFunc;
        eventClassName?: string[] | string;
        eventClassNames?: string[] | string;
        eventBackgroundColor?: string;
        eventBorderColor?: string;
        eventTextColor?: string;
        eventColor?: string;
        events?: EventSourceInput;
        eventSources?: EventSourceInput[];
        allDayDefault?: boolean;
        startParam?: string;
        endParam?: string;
        lazyFetching?: boolean;
        nextDayThreshold?: DurationInput;
        eventOrder?: string | Array<((a: EventApi, b: EventApi) => number) | (string | ((a: EventApi, b: EventApi) => number))>;
        rerenderDelay?: number | null;
        dragRevertDuration?: number;
        dragScroll?: boolean;
        longPressDelay?: number;
        eventLongPressDelay?: number;
        droppable?: boolean;
        dropAccept?: string | ((draggable: any) => boolean);
        eventDataTransform?: EventInputTransformer;
        allDayMaintainDuration?: boolean;
        eventResizableFromStart?: boolean;
        timeGridEventMinHeight?: number;
        allDayHtml?: string;
        eventDragMinDistance?: number;
        eventSourceFailure?: any;
        eventSourceSuccess?: any;
        forceEventDuration?: boolean;
        progressiveEventRendering?: boolean;
        selectLongPressDelay?: number;
        selectMinDistance?: number;
        timeZoneParam?: string;
        titleRangeSeparator?: string;
        datesRender?(arg: {
            view: View;
            el: HTMLElement;
        }): void;
        datesDestroy?(arg: {
            view: View;
            el: HTMLElement;
        }): void;
        dayRender?(arg: {
            view: View;
            date: Date;
            allDay?: boolean;
            el: HTMLElement;
        }): void;
        windowResize?(view: View): void;
        dateClick?(arg: {
            date: Date;
            dateStr: string;
            allDay: boolean;
            resource?: any;
            dayEl: HTMLElement;
            jsEvent: MouseEvent;
            view: View;
        }): void;
        eventClick?(arg: {
            el: HTMLElement;
            event: EventApi;
            jsEvent: MouseEvent;
            view: View;
        }): boolean | void;
        eventMouseEnter?(arg: {
            el: HTMLElement;
            event: EventApi;
            jsEvent: MouseEvent;
            view: View;
        }): void;
        eventMouseLeave?(arg: {
            el: HTMLElement;
            event: EventApi;
            jsEvent: MouseEvent;
            view: View;
        }): void;
        select?(arg: {
            start: Date;
            end: Date;
            startStr: string;
            endStr: string;
            allDay: boolean;
            resource?: any;
            jsEvent: MouseEvent;
            view: View;
        }): void;
        unselect?(arg: {
            view: View;
            jsEvent: Event;
        }): void;
        loading?(isLoading: boolean): void;
        eventRender?(arg: {
            isMirror: boolean;
            isStart: boolean;
            isEnd: boolean;
            event: EventApi;
            el: HTMLElement;
            view: View;
        }): void;
        eventPositioned?(arg: {
            isMirror: boolean;
            isStart: boolean;
            isEnd: boolean;
            event: EventApi;
            el: HTMLElement;
            view: View;
        }): void;
        _eventsPositioned?(arg: {
            view: View;
        }): void;
        eventDestroy?(arg: {
            isMirror: boolean;
            event: EventApi;
            el: HTMLElement;
            view: View;
        }): void;
        eventDragStart?(arg: {
            event: EventApi;
            el: HTMLElement;
            jsEvent: MouseEvent;
            view: View;
        }): void;
        eventDragStop?(arg: {
            event: EventApi;
            el: HTMLElement;
            jsEvent: MouseEvent;
            view: View;
        }): void;
        eventDrop?(arg: {
            el: HTMLElement;
            event: EventApi;
            oldEvent: EventApi;
            delta: Duration;
            revert: () => void;
            jsEvent: Event;
            view: View;
        }): void;
        eventResizeStart?(arg: {
            el: HTMLElement;
            event: EventApi;
            jsEvent: MouseEvent;
            view: View;
        }): void;
        eventResizeStop?(arg: {
            el: HTMLElement;
            event: EventApi;
            jsEvent: MouseEvent;
            view: View;
        }): void;
        eventResize?(arg: {
            el: HTMLElement;
            startDelta: Duration;
            endDelta: Duration;
            prevEvent: EventApi;
            event: EventApi;
            revert: () => void;
            jsEvent: Event;
            view: View;
        }): void;
        drop?(arg: {
            date: Date;
            dateStr: string;
            allDay: boolean;
            draggedEl: HTMLElement;
            jsEvent: MouseEvent;
            view: View;
        }): void;
        eventReceive?(arg: {
            event: EventApi;
            draggedEl: HTMLElement;
            view: View;
        }): void;
        eventLeave?(arg: {
            draggedEl: HTMLElement;
            event: EventApi;
            view: View;
        }): void;
        viewSkeletonRender?(arg: {
            el: HTMLElement;
            view: View;
        }): void;
        viewSkeletonDestroy?(arg: {
            el: HTMLElement;
            view: View;
        }): void;
        _destroyed?(): void;
        _init?(): void;
        _noEventDrop?(): void;
        _noEventResize?(): void;
        resourceRender?(arg: {
            resource: any;
            el: HTMLElement;
            view: View;
        }): void;
    }
    export interface ViewOptionsInput extends OptionsInputBase {
        type?: string;
        buttonText?: string;
    }
    export interface OptionsInput extends OptionsInputBase {
        buttonText?: ButtonTextCompoundInput;
        views?: {
            [viewId: string]: ViewOptionsInput;
        };
        plugins?: (PluginDef | string)[];
    }
}

declare module '@fullcalendar/core/structs/event' {
    import { DateInput } from '@fullcalendar/core/datelib/env';
    import Calendar from '@fullcalendar/core/Calendar';
    import { DateRange } from '@fullcalendar/core/datelib/date-range';
    import { Duration } from '@fullcalendar/core/datelib/duration';
    import { UnscopedEventUiInput, EventUi } from '@fullcalendar/core/component/event-ui';
    export type EventRenderingChoice = '' | 'background' | 'inverse-background' | 'none';
    export interface EventNonDateInput extends UnscopedEventUiInput {
        id?: string | number;
        groupId?: string | number;
        title?: string;
        url?: string;
        rendering?: EventRenderingChoice;
        extendedProps?: object;
        [extendedProp: string]: any;
    }
    export interface EventDateInput {
        start?: DateInput;
        end?: DateInput;
        date?: DateInput;
        allDay?: boolean;
    }
    export type EventInput = EventNonDateInput & EventDateInput;
    export interface EventDef {
        defId: string;
        sourceId: string;
        publicId: string;
        groupId: string;
        allDay: boolean;
        hasEnd: boolean;
        recurringDef: {
            typeId: number;
            typeData: any;
            duration: Duration | null;
        } | null;
        title: string;
        url: string;
        rendering: EventRenderingChoice;
        ui: EventUi;
        extendedProps: any;
    }
    export interface EventInstance {
        instanceId: string;
        defId: string;
        range: DateRange;
        forcedStartTzo: number | null;
        forcedEndTzo: number | null;
    }
    export interface EventTuple {
        def: EventDef;
        instance: EventInstance | null;
    }
    export type EventInstanceHash = {
        [instanceId: string]: EventInstance;
    };
    export type EventDefHash = {
        [defId: string]: EventDef;
    };
    export const NON_DATE_PROPS: {
        id: StringConstructor;
        groupId: StringConstructor;
        title: StringConstructor;
        url: StringConstructor;
        rendering: StringConstructor;
        extendedProps: any;
    };
    export const DATE_PROPS: {
        start: any;
        date: any;
        end: any;
        allDay: any;
    };
    export function parseEvent(raw: EventInput, sourceId: string, calendar: Calendar, allowOpenRange?: boolean): EventTuple | null;
    export function parseEventDef(raw: EventNonDateInput, sourceId: string, allDay: boolean, hasEnd: boolean, calendar: Calendar): EventDef;
    export type eventDefParserFunc = (def: EventDef, props: any, leftovers: any) => void;
    export function createEventInstance(defId: string, range: DateRange, forcedStartTzo?: number, forcedEndTzo?: number): EventInstance;
}

declare module '@fullcalendar/core/structs/business-hours' {
    import Calendar from '@fullcalendar/core/Calendar';
    import { EventInput } from '@fullcalendar/core/structs/event';
    import { EventStore } from '@fullcalendar/core/structs/event-store';
    export type BusinessHoursInput = boolean | EventInput | EventInput[];
    export function parseBusinessHours(input: BusinessHoursInput, calendar: Calendar): EventStore;
}

declare module '@fullcalendar/core/util/misc' {
    import { DateMarker } from '@fullcalendar/core/datelib/marker';
    import { Duration } from '@fullcalendar/core/datelib/duration';
    import { DateEnv } from '@fullcalendar/core/datelib/env';
    import { DateRange, OpenDateRange } from '@fullcalendar/core/datelib/date-range';
    export function compensateScroll(rowEl: HTMLElement, scrollbarWidths: any): void;
    export function uncompensateScroll(rowEl: HTMLElement): void;
    export function disableCursor(): void;
    export function enableCursor(): void;
    export function distributeHeight(els: HTMLElement[], availableHeight: any, shouldRedistribute: any): void;
    export function undistributeHeight(els: HTMLElement[]): void;
    export function matchCellWidths(els: HTMLElement[]): number;
    export function subtractInnerElHeight(outerEl: HTMLElement, innerEl: HTMLElement): number;
    export function preventSelection(el: HTMLElement): void;
    export function allowSelection(el: HTMLElement): void;
    export function preventContextMenu(el: HTMLElement): void;
    export function allowContextMenu(el: HTMLElement): void;
    export function parseFieldSpecs(input: any): any[];
    export function compareByFieldSpecs(obj0: any, obj1: any, fieldSpecs: any): any;
    export function compareByFieldSpec(obj0: any, obj1: any, fieldSpec: any): any;
    export function flexibleCompare(a: any, b: any): number;
    export function capitaliseFirstLetter(str: any): any;
    export function padStart(val: any, len: any): string;
    export function compareNumbers(a: any, b: any): number;
    export function isInt(n: any): boolean;
    export function applyAll(functions: any, thisObj: any, args: any): any;
    export function firstDefined(...args: any[]): any;
    export function debounce(func: any, wait: any): () => any;
    export type GenericHash = {
        [key: string]: any;
    };
    export function refineProps(rawProps: GenericHash, processors: GenericHash, defaults?: GenericHash, leftoverProps?: GenericHash): GenericHash;
    export function computeAlignedDayRange(timedRange: DateRange): DateRange;
    export function computeVisibleDayRange(timedRange: OpenDateRange, nextDayThreshold?: Duration): OpenDateRange;
    export function isMultiDayRange(range: DateRange): boolean;
    export function diffDates(date0: DateMarker, date1: DateMarker, dateEnv: DateEnv, largeUnit?: string): Duration;
}

declare module '@fullcalendar/core/util/html' {
    export function htmlEscape(s: any): string;
    export function cssToStr(cssProps: any): string;
    export function attrsToStr(attrs: any): string;
    export type ClassNameInput = string | string[];
    export function parseClassName(raw: ClassNameInput): string[];
}

declare module '@fullcalendar/core/util/array' {
    export function removeMatching(array: any, testFunc: any): number;
    export function removeExact(array: any, exactVal: any): number;
    export function isArraysEqual(a0: any, a1: any): boolean;
}

declare module '@fullcalendar/core/util/memoize' {
    export function memoize<T>(workerFunc: T): T;
    export function memoizeOutput<T>(workerFunc: T, equalityFunc: (output0: any, output1: any) => boolean): T;
}

declare module '@fullcalendar/core/component/memoized-rendering' {
    export interface MemoizedRendering<ArgsType extends any[]> {
        (...args: ArgsType): void;
        unrender: () => void;
        dependents: MemoizedRendering<any>[];
    }
    export function memoizeRendering<ArgsType extends any[]>(renderFunc: (...args: ArgsType) => void, unrenderFunc?: (...args: ArgsType) => void, dependencies?: MemoizedRendering<any>[]): MemoizedRendering<ArgsType>;
}

declare module '@fullcalendar/core/util/geom' {
    export interface Point {
        left: number;
        top: number;
    }
    export interface Rect {
        left: number;
        right: number;
        top: number;
        bottom: number;
    }
    export function pointInsideRect(point: Point, rect: Rect): boolean;
    export function intersectRects(rect1: Rect, rect2: Rect): Rect | false;
    export function translateRect(rect: Rect, deltaX: number, deltaY: number): Rect;
    export function constrainPoint(point: Point, rect: Rect): Point;
    export function getRectCenter(rect: Rect): Point;
    export function diffPoints(point1: Point, point2: Point): Point;
}

declare module '@fullcalendar/core/util/object' {
    export function mergeProps(propObjs: any, complexProps?: any): any;
    export function filterHash(hash: any, func: any): {};
    export function mapHash<InputItem, OutputItem>(hash: {
        [key: string]: InputItem;
    }, func: (input: InputItem, key: string) => OutputItem): {
        [key: string]: OutputItem;
    };
    export function arrayToHash(a: any): {
        [key: string]: true;
    };
    export function hashValuesToArray(obj: any): any[];
    export function isPropsEqual(obj0: any, obj1: any): boolean;
}

declare module '@fullcalendar/core/util/dom-manip' {
    export function createElement(tagName: string, attrs: object | null, content?: ElementContent): HTMLElement;
    export function htmlToElement(html: string): HTMLElement;
    export function htmlToElements(html: string): HTMLElement[];
    export type ElementContent = string | Node | Node[] | NodeList;
    export function appendToElement(el: HTMLElement, content: ElementContent): void;
    export function prependToElement(parent: HTMLElement, content: ElementContent): void;
    export function insertAfterElement(refEl: HTMLElement, content: ElementContent): void;
    export function removeElement(el: HTMLElement): void;
    export function elementClosest(el: HTMLElement, selector: string): HTMLElement;
    export function elementMatches(el: HTMLElement, selector: string): HTMLElement;
    export function findElements(container: HTMLElement[] | HTMLElement | NodeListOf<HTMLElement>, selector: string): HTMLElement[];
    export function findChildren(parent: HTMLElement[] | HTMLElement, selector?: string): HTMLElement[];
    export function forceClassName(el: HTMLElement, className: string, bool: any): void;
    export function applyStyle(el: HTMLElement, props: object): void;
    export function applyStyleProp(el: HTMLElement, name: string, val: any): void;
}

declare module '@fullcalendar/core/structs/event-store' {
    import { EventInput, EventDef, EventDefHash, EventInstanceHash, EventTuple } from '@fullcalendar/core/structs/event';
    import { EventSource } from '@fullcalendar/core/structs/event-source';
    import Calendar from '@fullcalendar/core/Calendar';
    import { DateRange } from '@fullcalendar/core/datelib/date-range';
    export interface EventStore {
        defs: EventDefHash;
        instances: EventInstanceHash;
    }
    export function parseEvents(rawEvents: EventInput[], sourceId: string, calendar: Calendar, allowOpenRange?: boolean): EventStore;
    export function eventTupleToStore(tuple: EventTuple, eventStore?: EventStore): EventStore;
    export function expandRecurring(eventStore: EventStore, framingRange: DateRange, calendar: Calendar): EventStore;
    export function getRelevantEvents(eventStore: EventStore, instanceId: string): EventStore;
    export function transformRawEvents(rawEvents: any, eventSource: EventSource, calendar: Calendar): any;
    export function createEmptyEventStore(): EventStore;
    export function mergeEventStores(store0: EventStore, store1: EventStore): EventStore;
    export function filterEventStoreDefs(eventStore: EventStore, filterFunc: (eventDef: EventDef) => boolean): EventStore;
}

declare module '@fullcalendar/core/component/event-ui' {
    import { Constraint, AllowFunc, ConstraintInput } from '@fullcalendar/core/validation';
    import { parseClassName } from '@fullcalendar/core/util/html';
    import Calendar from '@fullcalendar/core/Calendar';
    export interface UnscopedEventUiInput {
        editable?: boolean;
        startEditable?: boolean;
        durationEditable?: boolean;
        constraint?: ConstraintInput;
        overlap?: boolean;
        allow?: AllowFunc;
        className?: string[] | string;
        classNames?: string[] | string;
        backgroundColor?: string;
        borderColor?: string;
        textColor?: string;
        color?: string;
    }
    export interface EventUi {
        startEditable: boolean | null;
        durationEditable: boolean | null;
        constraints: Constraint[];
        overlap: boolean | null;
        allows: AllowFunc[];
        backgroundColor: string;
        borderColor: string;
        textColor: string;
        classNames: string[];
    }
    export type EventUiHash = {
        [defId: string]: EventUi;
    };
    export const UNSCOPED_EVENT_UI_PROPS: {
        editable: BooleanConstructor;
        startEditable: BooleanConstructor;
        durationEditable: BooleanConstructor;
        constraint: any;
        overlap: any;
        allow: any;
        className: typeof parseClassName;
        classNames: typeof parseClassName;
        color: StringConstructor;
        backgroundColor: StringConstructor;
        borderColor: StringConstructor;
        textColor: StringConstructor;
    };
    export function processUnscopedUiProps(rawProps: UnscopedEventUiInput, calendar: Calendar, leftovers?: any): EventUi;
    export function processScopedUiProps(prefix: string, rawScoped: any, calendar: Calendar, leftovers?: any): EventUi;
    export function combineEventUis(uis: EventUi[]): EventUi;
}

declare module '@fullcalendar/core/component/event-splitting' {
    import { EventStore } from '@fullcalendar/core/structs/event-store';
    import { EventDef } from '@fullcalendar/core/structs/event';
    import { EventInteractionState } from '@fullcalendar/core/interactions/event-interaction-state';
    import { EventUiHash, EventUi } from '@fullcalendar/core/component/event-ui';
    import { DateSpan } from '@fullcalendar/core/structs/date-span';
    export interface SplittableProps {
        businessHours: EventStore | null;
        dateSelection: DateSpan | null;
        eventStore: EventStore;
        eventUiBases: EventUiHash;
        eventSelection: string;
        eventDrag: EventInteractionState | null;
        eventResize: EventInteractionState | null;
    }
    export { Splitter as default, Splitter };
    abstract class Splitter<PropsType extends SplittableProps = SplittableProps> {
        abstract getKeyInfo(props: PropsType): {
            [key: string]: {
                ui?: EventUi;
                businessHours?: EventStore;
            };
        };
        abstract getKeysForDateSpan(dateSpan: DateSpan): string[];
        abstract getKeysForEventDef(eventDef: EventDef): string[];
        splitProps(props: PropsType): {
            [key: string]: SplittableProps;
        };
    }
}

declare module '@fullcalendar/core/component/date-rendering' {
    import { DateMarker } from '@fullcalendar/core/datelib/marker';
    import Component, { ComponentContext } from '@fullcalendar/core/component/Component';
    import { DateProfile } from '@fullcalendar/core/DateProfileGenerator';
    export function buildGotoAnchorHtml(component: Component<any>, gotoOptions: any, attrs: any, innerHtml?: any): string;
    export function getAllDayHtml(component: Component<any>): any;
    export function getDayClasses(date: DateMarker, dateProfile: DateProfile, context: ComponentContext, noThemeHighlight?: any): any[];
}

declare module '@fullcalendar/core/util/dom-event' {
    export function preventDefault(ev: any): void;
    export function listenBySelector(container: HTMLElement, eventType: string, selector: string, handler: (ev: Event, matchedTarget: HTMLElement) => void): () => void;
    export function listenToHoverBySelector(container: HTMLElement, selector: string, onMouseEnter: (ev: Event, matchedTarget: HTMLElement) => void, onMouseLeave: (ev: Event, matchedTarget: HTMLElement) => void): () => void;
    export function whenTransitionDone(el: HTMLElement, callback: (ev: Event) => void): void;
}

declare module '@fullcalendar/core/util/dom-geom' {
    import { Rect } from '@fullcalendar/core/util/geom';
    export interface EdgeInfo {
        borderLeft: number;
        borderRight: number;
        borderTop: number;
        borderBottom: number;
        scrollbarLeft: number;
        scrollbarRight: number;
        scrollbarBottom: number;
        paddingLeft?: number;
        paddingRight?: number;
        paddingTop?: number;
        paddingBottom?: number;
    }
    export function computeEdges(el: any, getPadding?: boolean): EdgeInfo;
    export function computeInnerRect(el: any, goWithinPadding?: boolean): {
        left: number;
        right: number;
        top: number;
        bottom: number;
    };
    export function computeRect(el: any): Rect;
    export function computeHeightAndMargins(el: HTMLElement): number;
    export function computeVMargins(el: HTMLElement): number;
    export function getClippingParents(el: HTMLElement): HTMLElement[];
    export function computeClippingRect(el: HTMLElement): Rect;
}

declare module '@fullcalendar/core/util/promise' {
    export function unpromisify(func: any, success: any, failure?: any): void;
}

declare module '@fullcalendar/core/common/EmitterMixin' {
    import Mixin from '@fullcalendar/core/common/Mixin';
    export interface EmitterInterface {
        on(types: any, handler: any): any;
        one(types: any, handler: any): any;
        off(types: any, handler: any): any;
        trigger(type: any, ...args: any[]): any;
        triggerWith(type: any, context: any, args: any): any;
        hasHandlers(type: any): any;
    }
    export { EmitterMixin as default, EmitterMixin };
    class EmitterMixin extends Mixin implements EmitterInterface {
        _handlers: any;
        _oneHandlers: any;
        on(type: any, handler: any): this;
        one(type: any, handler: any): this;
        off(type: any, handler?: any): this;
        trigger(type: any, ...args: any[]): this;
        triggerWith(type: any, context: any, args: any): this;
        hasHandlers(type: any): any;
    }
}

declare module '@fullcalendar/core/datelib/date-range' {
    import { DateMarker } from '@fullcalendar/core/datelib/marker';
    import { DateEnv, DateInput } from '@fullcalendar/core/datelib/env';
    export interface DateRangeInput {
        start?: DateInput;
        end?: DateInput;
    }
    export interface OpenDateRange {
        start: DateMarker | null;
        end: DateMarker | null;
    }
    export interface DateRange {
        start: DateMarker;
        end: DateMarker;
    }
    export function parseRange(input: DateRangeInput, dateEnv: DateEnv): OpenDateRange;
    export function invertRanges(ranges: DateRange[], constraintRange: DateRange): DateRange[];
    export function intersectRanges(range0: OpenDateRange, range1: OpenDateRange): OpenDateRange;
    export function rangesEqual(range0: OpenDateRange, range1: OpenDateRange): boolean;
    export function rangesIntersect(range0: OpenDateRange, range1: OpenDateRange): boolean;
    export function rangeContainsRange(outerRange: OpenDateRange, innerRange: OpenDateRange): boolean;
    export function rangeContainsMarker(range: OpenDateRange, date: DateMarker | number): boolean;
    export function constrainMarkerToRange(date: DateMarker, range: DateRange): DateMarker;
}

declare module '@fullcalendar/core/common/Mixin' {
    export { Mixin as default, Mixin };
    class Mixin {
        static mixInto(destClass: any): void;
        static mixIntoObj(destObj: any): void;
        static mixOver(destClass: any): void;
    }
}

declare module '@fullcalendar/core/common/PositionCache' {
    export { PositionCache as default, PositionCache };
    class PositionCache {
        originClientRect: ClientRect;
        els: HTMLElement[];
        originEl: HTMLElement;
        isHorizontal: boolean;
        isVertical: boolean;
        lefts: any;
        rights: any;
        tops: any;
        bottoms: any;
        constructor(originEl: HTMLElement, els: HTMLElement[], isHorizontal: boolean, isVertical: boolean);
        build(): void;
        buildElHorizontals(originClientLeft: number): void;
        buildElVerticals(originClientTop: number): void;
        leftToIndex(leftPosition: number): any;
        topToIndex(topPosition: number): any;
        getWidth(leftIndex: number): number;
        getHeight(topIndex: number): number;
    }
}

declare module '@fullcalendar/core/common/ScrollComponent' {
    import { ElementScrollController } from '@fullcalendar/core/common/scroll-controller';
    export interface ScrollbarWidths {
        left: number;
        right: number;
        bottom: number;
    }
    export { ScrollComponent as default, ScrollComponent };
    class ScrollComponent extends ElementScrollController {
        overflowX: string;
        overflowY: string;
        constructor(overflowX: string, overflowY: string);
        clear(): void;
        destroy(): void;
        applyOverflow(): void;
        lockOverflow(scrollbarWidths: ScrollbarWidths): void;
        setHeight(height: number | string): void;
        getScrollbarWidths(): ScrollbarWidths;
    }
}

declare module '@fullcalendar/core/common/scroll-controller' {
    export abstract class ScrollController {
        abstract getScrollTop(): number;
        abstract getScrollLeft(): number;
        abstract setScrollTop(top: number): void;
        abstract setScrollLeft(left: number): void;
        abstract getClientWidth(): number;
        abstract getClientHeight(): number;
        abstract getScrollWidth(): number;
        abstract getScrollHeight(): number;
        getMaxScrollTop(): number;
        getMaxScrollLeft(): number;
        canScrollVertically(): boolean;
        canScrollHorizontally(): boolean;
        canScrollUp(): boolean;
        canScrollDown(): boolean;
        canScrollLeft(): boolean;
        canScrollRight(): boolean;
    }
    export class ElementScrollController extends ScrollController {
        el: HTMLElement;
        constructor(el: HTMLElement);
        getScrollTop(): number;
        getScrollLeft(): number;
        setScrollTop(top: number): void;
        setScrollLeft(left: number): void;
        getScrollWidth(): number;
        getScrollHeight(): number;
        getClientHeight(): number;
        getClientWidth(): number;
    }
    export class WindowScrollController extends ScrollController {
        getScrollTop(): number;
        getScrollLeft(): number;
        setScrollTop(n: number): void;
        setScrollLeft(n: number): void;
        getScrollWidth(): number;
        getScrollHeight(): number;
        getClientHeight(): number;
        getClientWidth(): number;
    }
}

declare module '@fullcalendar/core/theme/Theme' {
    export { Theme as default, Theme };
    class Theme {
        calendarOptions: any;
        classes: any;
        iconClasses: any;
        baseIconClass: string;
        iconOverrideOption: any;
        iconOverrideCustomButtonOption: any;
        iconOverridePrefix: string;
        constructor(calendarOptions: any);
        processIconOverride(): void;
        setIconOverride(iconOverrideHash: any): void;
        applyIconOverridePrefix(className: any): any;
        getClass(key: any): any;
        getIconClass(buttonName: any): string;
        getCustomButtonIconClass(customButtonProps: any): string;
    }
    export type ThemeClass = {
        new (calendarOptions: any): Theme;
    };
}

declare module '@fullcalendar/core/component/Component' {
    import Calendar from '@fullcalendar/core/Calendar';
    import View from '@fullcalendar/core/View';
    import Theme from '@fullcalendar/core/theme/Theme';
    import { DateEnv } from '@fullcalendar/core/datelib/env';
    export interface ComponentContext {
        options: any;
        dateEnv: DateEnv;
        theme: Theme;
        calendar: Calendar;
        view: View;
    }
    export type EqualityFuncHash = {
        [propName: string]: (obj0: any, obj1: any) => boolean;
    };
    export { Component as default, Component };
    class Component<PropsType> {
        equalityFuncs: EqualityFuncHash;
        uid: string;
        props: PropsType | null;
        context: ComponentContext;
        dateEnv: DateEnv;
        theme: Theme;
        view: View;
        calendar: Calendar;
        isRtl: boolean;
        constructor(context: ComponentContext, isView?: boolean);
        static addEqualityFuncs(newFuncs: EqualityFuncHash): void;
        opt(name: any): any;
        receiveProps(props: PropsType): void;
        protected render(props: PropsType): void;
        destroy(): void;
    }
}

declare module '@fullcalendar/core/component/DateComponent' {
    import Component, { ComponentContext } from '@fullcalendar/core/component/Component';
    import { EventRenderRange } from '@fullcalendar/core/component/event-rendering';
    import { DateSpan } from '@fullcalendar/core/structs/date-span';
    import { EventInstanceHash } from '@fullcalendar/core/structs/event';
    import { Hit } from '@fullcalendar/core/interactions/hit';
    import FgEventRenderer from '@fullcalendar/core/component/renderers/FgEventRenderer';
    import FillRenderer from '@fullcalendar/core/component/renderers/FillRenderer';
    import { EventInteractionState } from '@fullcalendar/core/interactions/event-interaction-state';
    import { EventHandlerName, EventHandlerArgs } from '@fullcalendar/core/types/input-types';
    export type DateComponentHash = {
        [uid: string]: DateComponent<any>;
    };
    export interface Seg {
        component?: DateComponent<any>;
        isStart: boolean;
        isEnd: boolean;
        eventRange?: EventRenderRange;
        el?: HTMLElement;
        [otherProp: string]: any;
    }
    export interface EventSegUiInteractionState {
        affectedInstances: EventInstanceHash;
        segs: Seg[];
        isEvent: boolean;
        sourceSeg: any;
    }
    export { DateComponent as default, DateComponent };
    class DateComponent<PropsType> extends Component<PropsType> {
        fgSegSelector: string;
        bgSegSelector: string;
        largeUnit: any;
        eventRenderer: FgEventRenderer;
        mirrorRenderer: FgEventRenderer;
        fillRenderer: FillRenderer;
        el: HTMLElement;
        constructor(context: ComponentContext, el: HTMLElement, isView?: boolean);
        destroy(): void;
        buildPositionCaches(): void;
        queryHit(positionLeft: number, positionTop: number, elWidth: number, elHeight: number): Hit | null;
        isInteractionValid(interaction: EventInteractionState): boolean;
        isDateSelectionValid(selection: DateSpan): boolean;
        publiclyTrigger<T extends EventHandlerName>(name: T, args?: EventHandlerArgs<T>): any;
        publiclyTriggerAfterSizing<T extends EventHandlerName>(name: T, args: EventHandlerArgs<T>): void;
        hasPublicHandlers<T extends EventHandlerName>(name: T): boolean;
        triggerRenderedSegs(segs: Seg[], isMirrors: boolean): void;
        triggerWillRemoveSegs(segs: Seg[], isMirrors: boolean): void;
        isValidSegDownEl(el: HTMLElement): boolean;
        isValidDateDownEl(el: HTMLElement): boolean;
        isPopover(): boolean;
        isInPopover(el: HTMLElement): boolean;
    }
}

declare module '@fullcalendar/core/Calendar' {
    import { EmitterInterface } from '@fullcalendar/core/common/EmitterMixin';
    import OptionsManager from '@fullcalendar/core/OptionsManager';
    import View from '@fullcalendar/core/View';
    import Theme from '@fullcalendar/core/theme/Theme';
    import { OptionsInput, EventHandlerName, EventHandlerArgs } from '@fullcalendar/core/types/input-types';
    import { RawLocaleMap } from '@fullcalendar/core/datelib/locale';
    import { DateEnv, DateInput } from '@fullcalendar/core/datelib/env';
    import { DateMarker } from '@fullcalendar/core/datelib/marker';
    import { Duration, DurationInput } from '@fullcalendar/core/datelib/duration';
    import { DateSpan, DateSpanApi, DatePointApi } from '@fullcalendar/core/structs/date-span';
    import { DateRangeInput } from '@fullcalendar/core/datelib/date-range';
    import DateProfileGenerator from '@fullcalendar/core/DateProfileGenerator';
    import { EventSourceInput } from '@fullcalendar/core/structs/event-source';
    import { EventInput } from '@fullcalendar/core/structs/event';
    import { CalendarState, Action } from '@fullcalendar/core/reducers/types';
    import EventSourceApi from '@fullcalendar/core/api/EventSourceApi';
    import EventApi from '@fullcalendar/core/api/EventApi';
    import { EventStore } from '@fullcalendar/core/structs/event-store';
    import { EventUiHash, EventUi } from '@fullcalendar/core/component/event-ui';
    import { ViewSpecHash, ViewSpec } from '@fullcalendar/core/structs/view-spec';
    import { PluginSystem } from '@fullcalendar/core/plugin-system';
    import CalendarComponent from '@fullcalendar/core/CalendarComponent';
    import DateComponent from '@fullcalendar/core/component/DateComponent';
    import { PointerDragEvent } from '@fullcalendar/core/interactions/pointer';
    import { InteractionSettingsInput, Interaction } from '@fullcalendar/core/interactions/interaction';
    export interface DateClickApi extends DatePointApi {
        dayEl: HTMLElement;
        jsEvent: UIEvent;
        view: View;
    }
    export interface DateSelectionApi extends DateSpanApi {
        jsEvent: UIEvent;
        view: View;
    }
    export type DatePointTransform = (dateSpan: DateSpan, calendar: Calendar) => any;
    export type DateSpanTransform = (dateSpan: DateSpan, calendar: Calendar) => any;
    export type CalendarInteraction = {
        destroy(): any;
    };
    export type CalendarInteractionClass = {
        new (calendar: Calendar): CalendarInteraction;
    };
    export type OptionChangeHandler = (propValue: any, calendar: Calendar, deepEqual: any) => void;
    export type OptionChangeHandlerMap = {
        [propName: string]: OptionChangeHandler;
    };
    export { Calendar as default, Calendar };
    class Calendar {
        static on: EmitterInterface['on'];
        static off: EmitterInterface['off'];
        static trigger: EmitterInterface['trigger'];
        on: EmitterInterface['on'];
        one: EmitterInterface['one'];
        off: EmitterInterface['off'];
        trigger: EmitterInterface['trigger'];
        triggerWith: EmitterInterface['triggerWith'];
        hasHandlers: EmitterInterface['hasHandlers'];
        eventUiBases: EventUiHash;
        selectionConfig: EventUi;
        optionsManager: OptionsManager;
        viewSpecs: ViewSpecHash;
        dateProfileGenerators: {
            [viewName: string]: DateProfileGenerator;
        };
        theme: Theme;
        dateEnv: DateEnv;
        availableRawLocales: RawLocaleMap;
        pluginSystem: PluginSystem;
        defaultAllDayEventDuration: Duration;
        defaultTimedEventDuration: Duration;
        calendarInteractions: CalendarInteraction[];
        interactionsStore: {
            [componentUid: string]: Interaction[];
        };
        removeNavLinkListener: any;
        windowResizeProxy: any;
        isHandlingWindowResize: boolean;
        state: CalendarState;
        actionQueue: any[];
        isReducing: boolean;
        needsRerender: boolean;
        needsFullRerender: boolean;
        isRendering: boolean;
        renderingPauseDepth: number;
        renderableEventStore: EventStore;
        buildDelayedRerender: typeof buildDelayedRerender;
        delayedRerender: any;
        afterSizingTriggers: any;
        isViewUpdated: boolean;
        isDatesUpdated: boolean;
        isEventsUpdated: boolean;
        el: HTMLElement;
        component: CalendarComponent;
        constructor(el: HTMLElement, overrides?: OptionsInput);
        addPluginInputs(pluginInputs: any): void;
        readonly view: View;
        render(): void;
        destroy(): void;
        bindHandlers(): void;
        unbindHandlers(): void;
        hydrate(): void;
        buildInitialState(): CalendarState;
        reduce(state: CalendarState, action: Action, calendar: Calendar): CalendarState;
        requestRerender(needsFull?: boolean): void;
        tryRerender(): void;
        batchRendering(func: any): void;
        executeRender(): void;
        renderComponent(needsFull: any): void;
        setOption(name: string, val: any): void;
        getOption(name: string): any;
        opt(name: string): any;
        viewOpt(name: string): any;
        viewOpts(): any;
        mutateOptions(updates: any, removals: string[], isDynamic?: boolean, deepEqual?: any): void;
        handleOptions(options: any): void;
        getAvailableLocaleCodes(): string[];
        _buildSelectionConfig(rawOpts: any): EventUi;
        _buildEventUiSingleBase(rawOpts: any): EventUi;
        hasPublicHandlers<T extends EventHandlerName>(name: T): boolean;
        publiclyTrigger<T extends EventHandlerName>(name: T, args?: EventHandlerArgs<T>): any;
        publiclyTriggerAfterSizing<T extends EventHandlerName>(name: T, args: EventHandlerArgs<T>): void;
        releaseAfterSizingTriggers(): void;
        isValidViewType(viewType: string): boolean;
        changeView(viewType: string, dateOrRange?: DateRangeInput | DateInput): void;
        zoomTo(dateMarker: DateMarker, viewType?: string): void;
        getUnitViewSpec(unit: string): ViewSpec | null;
        getInitialDate(): Date;
        prev(): void;
        next(): void;
        prevYear(): void;
        nextYear(): void;
        today(): void;
        gotoDate(zonedDateInput: any): void;
        incrementDate(deltaInput: any): void;
        getDate(): Date;
        formatDate(d: DateInput, formatter: any): string;
        formatRange(d0: DateInput, d1: DateInput, settings: any): any;
        formatIso(d: DateInput, omitTime?: boolean): string;
        windowResize(ev: Event): void;
        updateSize(): void;
        registerInteractiveComponent(component: DateComponent<any>, settingsInput: InteractionSettingsInput): void;
        unregisterInteractiveComponent(component: DateComponent<any>): void;
        select(dateOrObj: DateInput | any, endDate?: DateInput): void;
        unselect(pev?: PointerDragEvent): void;
        triggerDateSelect(selection: DateSpan, pev?: PointerDragEvent): void;
        triggerDateUnselect(pev?: PointerDragEvent): void;
        triggerDateClick(dateSpan: DateSpan, dayEl: HTMLElement, view: View, ev: UIEvent): void;
        buildDatePointApi(dateSpan: DateSpan): import("@fullcalendar/core/structs/date-span").DatePointApi;
        buildDateSpanApi(dateSpan: DateSpan): import("@fullcalendar/core/structs/date-span").DateSpanApi;
        getNow(): DateMarker;
        getDefaultEventEnd(allDay: boolean, marker: DateMarker): DateMarker;
        addEvent(eventInput: EventInput, sourceInput?: EventSourceApi | string | number): EventApi | null;
        getEventById(id: string): EventApi | null;
        getEvents(): EventApi[];
        removeAllEvents(): void;
        rerenderEvents(): void;
        getEventSources(): EventSourceApi[];
        getEventSourceById(id: string | number): EventSourceApi | null;
        addEventSource(sourceInput: EventSourceInput): EventSourceApi;
        removeAllEventSources(): void;
        refetchEvents(): void;
        scrollToTime(timeInput: DurationInput): void;
    }
    function buildDelayedRerender(this: Calendar, wait: any): any;
    export {};
}

declare module '@fullcalendar/core/View' {
    import DateProfileGenerator, { DateProfile } from '@fullcalendar/core/DateProfileGenerator';
    import { DateMarker } from '@fullcalendar/core/datelib/marker';
    import { Duration } from '@fullcalendar/core/datelib/duration';
    import { EmitterInterface } from '@fullcalendar/core/common/EmitterMixin';
    import { ViewSpec } from '@fullcalendar/core/structs/view-spec';
    import { ComponentContext } from '@fullcalendar/core/component/Component';
    import DateComponent from '@fullcalendar/core/component/DateComponent';
    import { EventStore } from '@fullcalendar/core/structs/event-store';
    import { EventUiHash, EventUi } from '@fullcalendar/core/component/event-ui';
    import { EventRenderRange } from '@fullcalendar/core/component/event-rendering';
    import { DateSpan } from '@fullcalendar/core/structs/date-span';
    import { EventInteractionState } from '@fullcalendar/core/interactions/event-interaction-state';
    import { EventDef } from '@fullcalendar/core/structs/event';
    export interface ViewProps {
        dateProfile: DateProfile;
        businessHours: EventStore;
        eventStore: EventStore;
        eventUiBases: EventUiHash;
        dateSelection: DateSpan | null;
        eventSelection: string;
        eventDrag: EventInteractionState | null;
        eventResize: EventInteractionState | null;
    }
    export { View as default, View };
    abstract class View extends DateComponent<ViewProps> {
        usesMinMaxTime: boolean;
        dateProfileGeneratorClass: any;
        on: EmitterInterface['on'];
        one: EmitterInterface['one'];
        off: EmitterInterface['off'];
        trigger: EmitterInterface['trigger'];
        triggerWith: EmitterInterface['triggerWith'];
        hasHandlers: EmitterInterface['hasHandlers'];
        viewSpec: ViewSpec;
        dateProfileGenerator: DateProfileGenerator;
        type: string;
        title: string;
        queuedScroll: any;
        eventOrderSpecs: any;
        nextDayThreshold: Duration;
        isNowIndicatorRendered: boolean;
        initialNowDate: DateMarker;
        initialNowQueriedMs: number;
        nowIndicatorTimeoutID: any;
        nowIndicatorIntervalID: any;
        constructor(context: ComponentContext, viewSpec: ViewSpec, dateProfileGenerator: DateProfileGenerator, parentEl: HTMLElement);
        initialize(): void;
        readonly activeStart: Date;
        readonly activeEnd: Date;
        readonly currentStart: Date;
        readonly currentEnd: Date;
        render(props: ViewProps): void;
        destroy(): void;
        updateSize(isResize: boolean, viewHeight: number, isAuto: boolean): void;
        updateBaseSize(isResize: boolean, viewHeight: number, isAuto: boolean): void;
        renderDatesWrap(dateProfile: DateProfile): void;
        unrenderDatesWrap(): void;
        renderDates(dateProfile: DateProfile): void;
        unrenderDates(): void;
        renderBusinessHours(businessHours: EventStore): void;
        unrenderBusinessHours(): void;
        renderDateSelectionWrap(selection: DateSpan): void;
        unrenderDateSelectionWrap(selection: DateSpan): void;
        renderDateSelection(selection: DateSpan): void;
        unrenderDateSelection(selection: DateSpan): void;
        renderEvents(eventStore: EventStore): void;
        unrenderEvents(): void;
        sliceEvents(eventStore: EventStore, allDay: boolean): EventRenderRange[];
        computeEventDraggable(eventDef: EventDef, eventUi: EventUi): boolean;
        computeEventStartResizable(eventDef: EventDef, eventUi: EventUi): any;
        computeEventEndResizable(eventDef: EventDef, eventUi: EventUi): boolean;
        renderEventSelectionWrap(instanceId: string): void;
        unrenderEventSelectionWrap(instanceId: string): void;
        renderEventSelection(instanceId: string): void;
        unrenderEventSelection(instanceId: string): void;
        renderEventDragWrap(state: EventInteractionState): void;
        unrenderEventDragWrap(state: EventInteractionState): void;
        renderEventDrag(state: EventInteractionState): void;
        unrenderEventDrag(state: EventInteractionState): void;
        renderEventResizeWrap(state: EventInteractionState): void;
        unrenderEventResizeWrap(state: EventInteractionState): void;
        renderEventResize(state: EventInteractionState): void;
        unrenderEventResize(state: EventInteractionState): void;
        startNowIndicator(dateProfile: DateProfile): void;
        updateNowIndicator(): void;
        stopNowIndicator(): void;
        getNowIndicatorUnit(dateProfile: DateProfile): void;
        renderNowIndicator(date: any): void;
        unrenderNowIndicator(): void;
        addScroll(scroll: any): void;
        popScroll(isResize: boolean): void;
        applyQueuedScroll(isResize: boolean): void;
        queryScroll(): any;
        applyScroll(scroll: any, isResize: boolean): void;
        computeDateScroll(duration: Duration): {};
        queryDateScroll(): {};
        applyDateScroll(scroll: any): void;
        scrollToDuration(duration: Duration): void;
    }
}

declare module '@fullcalendar/core/component/renderers/FgEventRenderer' {
    import { DateMarker } from '@fullcalendar/core/datelib/marker';
    import { DateFormatter } from '@fullcalendar/core/datelib/formatting';
    import { EventUi } from '@fullcalendar/core/component/event-ui';
    import { EventRenderRange } from '@fullcalendar/core/component/event-rendering';
    import { Seg } from '@fullcalendar/core/component/DateComponent';
    import { ComponentContext } from '@fullcalendar/core/component/Component';
    export { FgEventRenderer as default, FgEventRenderer };
    abstract class FgEventRenderer {
        context: ComponentContext;
        eventTimeFormat: DateFormatter;
        displayEventTime: boolean;
        displayEventEnd: boolean;
        segs: Seg[];
        isSizeDirty: boolean;
        constructor(context: ComponentContext);
        renderSegs(segs: Seg[], mirrorInfo?: any): void;
        unrender(_segs: Seg[], mirrorInfo?: any): void;
        abstract renderSegHtml(seg: Seg, mirrorInfo: any): string;
        abstract attachSegs(segs: Seg[], mirrorInfo: any): any;
        abstract detachSegs(segs: Seg[]): any;
        rangeUpdated(): void;
        renderSegEls(segs: Seg[], mirrorInfo: any): Seg[];
        getSegClasses(seg: Seg, isDraggable: any, isResizable: any, mirrorInfo: any): string[];
        getTimeText(eventRange: EventRenderRange, formatter?: any, displayEnd?: any): any;
        _getTimeText(start: DateMarker, end: DateMarker, allDay: any, formatter?: any, displayEnd?: any, forcedStartTzo?: number, forcedEndTzo?: number): any;
        computeEventTimeFormat(): any;
        computeDisplayEventTime(): boolean;
        computeDisplayEventEnd(): boolean;
        getSkinCss(ui: EventUi): {
            'background-color': string;
            'border-color': string;
            color: string;
        };
        sortEventSegs(segs: any): Seg[];
        computeSizes(force: boolean): void;
        assignSizes(force: boolean): void;
        computeSegSizes(segs: Seg[]): void;
        assignSegSizes(segs: Seg[]): void;
        hideByHash(hash: any): void;
        showByHash(hash: any): void;
        selectByInstanceId(instanceId: string): void;
        unselectByInstanceId(instanceId: string): void;
    }
    export function buildSegCompareObj(seg: Seg): any;
}

declare module '@fullcalendar/core/component/renderers/FillRenderer' {
    import { Seg } from '@fullcalendar/core/component/DateComponent';
    import { ComponentContext } from '@fullcalendar/core/component/Component';
    export { FillRenderer as default, FillRenderer };
    abstract class FillRenderer {
        context: ComponentContext;
        fillSegTag: string;
        containerElsByType: any;
        segsByType: any;
        dirtySizeFlags: any;
        constructor(context: ComponentContext);
        getSegsByType(type: string): any;
        renderSegs(type: any, segs: Seg[]): void;
        unrender(type: any): void;
        renderSegEls(type: any, segs: Seg[]): Seg[];
        renderSegHtml(type: any, seg: Seg): string;
        abstract attachSegs(type: any, segs: Seg[]): HTMLElement[] | void;
        detachSegs(type: any, segs: Seg[]): void;
        computeSizes(force: boolean): void;
        assignSizes(force: boolean): void;
        computeSegSizes(segs: Seg[]): void;
        assignSegSizes(segs: Seg[]): void;
    }
}

declare module '@fullcalendar/core/DateProfileGenerator' {
    import { DateMarker } from '@fullcalendar/core/datelib/marker';
    import { Duration } from '@fullcalendar/core/datelib/duration';
    import { DateRange, OpenDateRange } from '@fullcalendar/core/datelib/date-range';
    import { ViewSpec } from '@fullcalendar/core/structs/view-spec';
    import { DateEnv } from '@fullcalendar/core/datelib/env';
    import Calendar from '@fullcalendar/core/Calendar';
    export interface DateProfile {
        currentRange: DateRange;
        currentRangeUnit: string;
        isRangeAllDay: boolean;
        validRange: OpenDateRange;
        activeRange: DateRange;
        renderRange: DateRange;
        minTime: Duration;
        maxTime: Duration;
        isValid: boolean;
        dateIncrement: Duration;
    }
    export { DateProfileGenerator as default, DateProfileGenerator };
    class DateProfileGenerator {
        viewSpec: ViewSpec;
        options: any;
        dateEnv: DateEnv;
        calendar: Calendar;
        isHiddenDayHash: boolean[];
        constructor(viewSpec: ViewSpec, calendar: Calendar);
        buildPrev(currentDateProfile: DateProfile, currentDate: DateMarker): DateProfile;
        buildNext(currentDateProfile: DateProfile, currentDate: DateMarker): DateProfile;
        build(currentDate: DateMarker, direction?: any, forceToValid?: boolean): DateProfile;
        buildValidRange(): OpenDateRange;
        buildCurrentRangeInfo(date: DateMarker, direction: any): {
            duration: any;
            unit: any;
            range: any;
        };
        getFallbackDuration(): Duration;
        adjustActiveRange(range: DateRange, minTime: Duration, maxTime: Duration): {
            start: Date;
            end: Date;
        };
        buildRangeFromDuration(date: DateMarker, direction: any, duration: Duration, unit: any): any;
        buildRangeFromDayCount(date: DateMarker, direction: any, dayCount: any): {
            start: Date;
            end: Date;
        };
        buildCustomVisibleRange(date: DateMarker): OpenDateRange;
        buildRenderRange(currentRange: DateRange, currentRangeUnit: any, isRangeAllDay: any): DateRange;
        buildDateIncrement(fallback: any): Duration;
        getRangeOption(name: any, ...otherArgs: any[]): OpenDateRange;
        initHiddenDays(): void;
        trimHiddenDays(range: DateRange): DateRange | null;
        isHiddenDay(day: any): boolean;
        skipHiddenDays(date: DateMarker, inc?: number, isExclusive?: boolean): Date;
    }
    export function isDateProfilesEqual(p0: DateProfile, p1: DateProfile): boolean;
}

declare module '@fullcalendar/core/structs/view-def' {
    import { ViewClass, ViewConfigHash } from '@fullcalendar/core/structs/view-config';
    export interface ViewDef {
        type: string;
        class: ViewClass;
        overrides: any;
        defaults: any;
    }
    export type ViewDefHash = {
        [viewType: string]: ViewDef;
    };
    export function compileViewDefs(defaultConfigs: ViewConfigHash, overrideConfigs: ViewConfigHash): ViewDefHash;
}

declare module '@fullcalendar/core/structs/view-spec' {
    import { Duration } from '@fullcalendar/core/datelib/duration';
    import OptionsManager from '@fullcalendar/core/OptionsManager';
    import { ViewConfigInputHash, ViewClass } from '@fullcalendar/core/structs/view-config';
    export interface ViewSpec {
        type: string;
        class: ViewClass;
        duration: Duration;
        durationUnit: string;
        singleUnit: string;
        options: any;
        buttonTextOverride: string;
        buttonTextDefault: string;
    }
    export type ViewSpecHash = {
        [viewType: string]: ViewSpec;
    };
    export function buildViewSpecs(defaultInputs: ViewConfigInputHash, optionsManager: OptionsManager): ViewSpecHash;
}

declare module '@fullcalendar/core/structs/date-span' {
    import { DateRange, OpenDateRange } from '@fullcalendar/core/datelib/date-range';
    import { DateInput, DateEnv } from '@fullcalendar/core/datelib/env';
    import { Duration } from '@fullcalendar/core/datelib/duration';
    import { EventRenderRange } from '@fullcalendar/core/component/event-rendering';
    import { EventUiHash } from '@fullcalendar/core/component/event-ui';
    import Calendar from '@fullcalendar/core/Calendar';
    export interface OpenDateSpanInput {
        start?: DateInput;
        end?: DateInput;
        allDay?: boolean;
        [otherProp: string]: any;
    }
    export interface DateSpanInput extends OpenDateSpanInput {
        start: DateInput;
        end: DateInput;
    }
    export interface OpenDateSpan {
        range: OpenDateRange;
        allDay: boolean;
        [otherProp: string]: any;
    }
    export interface DateSpan extends OpenDateSpan {
        range: DateRange;
    }
    export interface DateSpanApi {
        start: Date;
        end: Date;
        startStr: string;
        endStr: string;
        allDay: boolean;
    }
    export interface DatePointApi {
        date: Date;
        dateStr: string;
        allDay: boolean;
    }
    export function parseDateSpan(raw: DateSpanInput, dateEnv: DateEnv, defaultDuration?: Duration): DateSpan | null;
    export function parseOpenDateSpan(raw: OpenDateSpanInput, dateEnv: DateEnv): OpenDateSpan | null;
    export function isDateSpansEqual(span0: DateSpan, span1: DateSpan): boolean;
    export function buildDateSpanApi(span: DateSpan, dateEnv: DateEnv): DateSpanApi;
    export function buildDatePointApi(span: DateSpan, dateEnv: DateEnv): DatePointApi;
    export function fabricateEventRange(dateSpan: DateSpan, eventUiBases: EventUiHash, calendar: Calendar): EventRenderRange;
}

declare module '@fullcalendar/core/datelib/marker' {
    import { Duration } from '@fullcalendar/core/datelib/duration';
    export type DateMarker = Date;
    export const DAY_IDS: string[];
    export function addWeeks(m: DateMarker, n: number): Date;
    export function addDays(m: DateMarker, n: number): Date;
    export function addMs(m: DateMarker, n: number): Date;
    export function diffWeeks(m0: any, m1: any): number;
    export function diffDays(m0: any, m1: any): number;
    export function diffHours(m0: any, m1: any): number;
    export function diffMinutes(m0: any, m1: any): number;
    export function diffSeconds(m0: any, m1: any): number;
    export function diffDayAndTime(m0: DateMarker, m1: DateMarker): Duration;
    export function diffWholeWeeks(m0: DateMarker, m1: DateMarker): number;
    export function diffWholeDays(m0: DateMarker, m1: DateMarker): number;
    export function startOfDay(m: DateMarker): DateMarker;
    export function startOfHour(m: DateMarker): Date;
    export function startOfMinute(m: DateMarker): Date;
    export function startOfSecond(m: DateMarker): Date;
    export function weekOfYear(marker: any, dow: any, doy: any): number;
    export function dateToLocalArray(date: any): any[];
    export function arrayToLocalDate(a: any): Date;
    export function dateToUtcArray(date: any): any[];
    export function arrayToUtcDate(a: any): Date;
    export function isValidDate(m: DateMarker): boolean;
    export function timeAsMs(m: DateMarker): number;
}

declare module '@fullcalendar/core/datelib/duration' {
    export type DurationInput = DurationObjectInput | string | number;
    export interface DurationObjectInput {
        years?: number;
        year?: number;
        months?: number;
        month?: number;
        weeks?: number;
        week?: number;
        days?: number;
        day?: number;
        hours?: number;
        hour?: number;
        minutes?: number;
        minute?: number;
        seconds?: number;
        second?: number;
        milliseconds?: number;
        millisecond?: number;
        ms?: number;
    }
    export interface Duration {
        years: number;
        months: number;
        days: number;
        milliseconds: number;
    }
    export function createDuration(input: DurationInput, unit?: string): Duration | null;
    export function getWeeksFromInput(obj: DurationObjectInput): number;
    export function durationsEqual(d0: Duration, d1: Duration): boolean;
    export function isSingleDay(dur: Duration): boolean;
    export function addDurations(d0: Duration, d1: Duration): {
        years: number;
        months: number;
        days: number;
        milliseconds: number;
    };
    export function subtractDurations(d1: Duration, d0: Duration): Duration;
    export function multiplyDuration(d: Duration, n: number): {
        years: number;
        months: number;
        days: number;
        milliseconds: number;
    };
    export function asRoughYears(dur: Duration): number;
    export function asRoughMonths(dur: Duration): number;
    export function asRoughDays(dur: Duration): number;
    export function asRoughHours(dur: Duration): number;
    export function asRoughMinutes(dur: Duration): number;
    export function asRoughSeconds(dur: Duration): number;
    export function asRoughMs(dur: Duration): number;
    export function wholeDivideDurations(numerator: Duration, denominator: Duration): number;
    export function greatestDurationDenominator(dur: Duration, dontReturnWeeks?: boolean): {
        unit: string;
        value: number;
    };
}

declare module '@fullcalendar/core/datelib/env' {
    import { DateMarker } from '@fullcalendar/core/datelib/marker';
    import { CalendarSystem } from '@fullcalendar/core/datelib/calendar-system';
    import { Locale } from '@fullcalendar/core/datelib/locale';
    import { NamedTimeZoneImpl, NamedTimeZoneImplClass } from '@fullcalendar/core/datelib/timezone';
    import { Duration } from '@fullcalendar/core/datelib/duration';
    import { DateFormatter } from '@fullcalendar/core/datelib/formatting';
    import { CmdFormatterFunc } from '@fullcalendar/core/datelib/formatting-cmd';
    export interface DateEnvSettings {
        timeZone: string;
        namedTimeZoneImpl?: NamedTimeZoneImplClass;
        calendarSystem: string;
        locale: Locale;
        weekNumberCalculation?: any;
        firstDay?: any;
        weekLabel?: string;
        cmdFormatter?: CmdFormatterFunc;
    }
    export type DateInput = Date | string | number | number[];
    export interface DateMarkerMeta {
        marker: DateMarker;
        isTimeUnspecified: boolean;
        forcedTzo: number | null;
    }
    export class DateEnv {
        timeZone: string;
        namedTimeZoneImpl: NamedTimeZoneImpl;
        canComputeOffset: boolean;
        calendarSystem: CalendarSystem;
        locale: Locale;
        weekDow: number;
        weekDoy: number;
        weekNumberFunc: any;
        weekLabel: string;
        cmdFormatter?: CmdFormatterFunc;
        constructor(settings: DateEnvSettings);
        createMarker(input: DateInput): DateMarker;
        createNowMarker(): DateMarker;
        createMarkerMeta(input: DateInput): DateMarkerMeta;
        parse(s: string): {
            marker: Date;
            isTimeUnspecified: boolean;
            forcedTzo: any;
        };
        getYear(marker: DateMarker): number;
        getMonth(marker: DateMarker): number;
        add(marker: DateMarker, dur: Duration): DateMarker;
        subtract(marker: DateMarker, dur: Duration): DateMarker;
        addYears(marker: DateMarker, n: number): Date;
        addMonths(marker: DateMarker, n: number): Date;
        diffWholeYears(m0: DateMarker, m1: DateMarker): number;
        diffWholeMonths(m0: DateMarker, m1: DateMarker): number;
        greatestWholeUnit(m0: DateMarker, m1: DateMarker): {
            unit: string;
            value: number;
        };
        countDurationsBetween(m0: DateMarker, m1: DateMarker, d: Duration): number;
        startOf(m: DateMarker, unit: string): Date;
        startOfYear(m: DateMarker): DateMarker;
        startOfMonth(m: DateMarker): DateMarker;
        startOfWeek(m: DateMarker): DateMarker;
        computeWeekNumber(marker: DateMarker): number;
        format(marker: DateMarker, formatter: DateFormatter, dateOptions?: {
            forcedTzo?: number;
        }): any;
        formatRange(start: DateMarker, end: DateMarker, formatter: DateFormatter, dateOptions?: {
            forcedStartTzo?: number;
            forcedEndTzo?: number;
            isEndExclusive?: boolean;
        }): any;
        formatIso(marker: DateMarker, extraOptions?: any): string;
        timestampToMarker(ms: number): Date;
        offsetForMarker(m: DateMarker): number;
        toDate(m: DateMarker, forcedTzo?: number): Date;
    }
}

declare module '@fullcalendar/core/datelib/formatting' {
    import { DateMarker } from '@fullcalendar/core/datelib/marker';
    import { CalendarSystem } from '@fullcalendar/core/datelib/calendar-system';
    import { Locale } from '@fullcalendar/core/datelib/locale';
    import { CmdFormatterFunc } from '@fullcalendar/core/datelib/formatting-cmd';
    import { FuncFormatterFunc } from '@fullcalendar/core/datelib/formatting-func';
    export interface ZonedMarker {
        marker: DateMarker;
        timeZoneOffset: number;
    }
    export interface ExpandedZonedMarker extends ZonedMarker {
        array: number[];
        year: number;
        month: number;
        day: number;
        hour: number;
        minute: number;
        second: number;
        millisecond: number;
    }
    export interface VerboseFormattingArg {
        date: ExpandedZonedMarker;
        start: ExpandedZonedMarker;
        end?: ExpandedZonedMarker;
        timeZone: string;
        localeCodes: string[];
        separator: string;
    }
    export interface DateFormattingContext {
        timeZone: string;
        locale: Locale;
        calendarSystem: CalendarSystem;
        computeWeekNumber: (d: DateMarker) => number;
        weekLabel: string;
        cmdFormatter?: CmdFormatterFunc;
    }
    export interface DateFormatter {
        format(date: ZonedMarker, context: DateFormattingContext): any;
        formatRange(start: ZonedMarker, end: ZonedMarker, context: DateFormattingContext): any;
    }
    export type FormatterInput = object | string | FuncFormatterFunc;
    export function createFormatter(input: FormatterInput, defaultSeparator?: string): DateFormatter;
    export function buildIsoString(marker: DateMarker, timeZoneOffset?: number, stripZeroTime?: boolean): string;
    export function formatIsoTimeString(marker: DateMarker): string;
    export function formatTimeZoneOffset(minutes: number, doIso?: boolean): string;
    export function createVerboseFormattingArg(start: ZonedMarker, end: ZonedMarker, context: DateFormattingContext, separator?: string): VerboseFormattingArg;
}

declare module '@fullcalendar/core/datelib/timezone' {
    export abstract class NamedTimeZoneImpl {
        timeZoneName: string;
        constructor(timeZoneName: string);
        abstract offsetForArray(a: number[]): number;
        abstract timestampToArray(ms: number): number[];
    }
    export type NamedTimeZoneImplClass = {
        new (timeZoneName: string): NamedTimeZoneImpl;
    };
}

declare module '@fullcalendar/core/datelib/parsing' {
    export function parse(str: any): {
        marker: Date;
        isTimeUnspecified: boolean;
        timeZoneOffset: any;
    };
}

declare module '@fullcalendar/core/structs/event-source' {
    import { EventInput } from '@fullcalendar/core/structs/event';
    import Calendar from '@fullcalendar/core/Calendar';
    import { DateRange } from '@fullcalendar/core/datelib/date-range';
    import { EventSourceFunc } from '@fullcalendar/core/event-sources/func-event-source';
    import { EventUi } from '@fullcalendar/core/component/event-ui';
    import { ConstraintInput, AllowFunc } from '@fullcalendar/core/validation';
    export type EventSourceError = {
        message: string;
        response?: any;
        [otherProp: string]: any;
    };
    export type EventInputTransformer = (eventInput: EventInput) => EventInput | null;
    export type EventSourceSuccessResponseHandler = (rawData: any, response: any) => EventInput[] | void;
    export type EventSourceErrorResponseHandler = (error: EventSourceError) => void;
    export interface ExtendedEventSourceInput {
        id?: string | number;
        allDayDefault?: boolean;
        eventDataTransform?: EventInputTransformer;
        events?: EventInput[] | EventSourceFunc;
        url?: string;
        method?: string;
        extraParams?: object | (() => object);
        startParam?: string;
        endParam?: string;
        timeZoneParam?: string;
        success?: EventSourceSuccessResponseHandler;
        failure?: EventSourceErrorResponseHandler;
        editable?: boolean;
        startEditable?: boolean;
        durationEditable?: boolean;
        constraint?: ConstraintInput;
        overlap?: boolean;
        allow?: AllowFunc;
        className?: string[] | string;
        classNames?: string[] | string;
        backgroundColor?: string;
        borderColor?: string;
        textColor?: string;
        color?: string;
        [otherProp: string]: any;
    }
    export type EventSourceInput = ExtendedEventSourceInput | // object in extended form
    EventSourceFunc | // just a function
    string;
    export interface EventSource {
        _raw: any;
        sourceId: string;
        sourceDefId: number;
        meta: any;
        publicId: string;
        isFetching: boolean;
        latestFetchId: string;
        fetchRange: DateRange | null;
        allDayDefault: boolean | null;
        eventDataTransform: EventInputTransformer;
        ui: EventUi;
        success: EventSourceSuccessResponseHandler | null;
        failure: EventSourceErrorResponseHandler | null;
        extendedProps: any;
    }
    export type EventSourceHash = {
        [sourceId: string]: EventSource;
    };
    export type EventSourceFetcher = (arg: {
        eventSource: EventSource;
        calendar: Calendar;
        range: DateRange;
    }, success: (res: {
        rawEvents: EventInput[];
        xhr?: XMLHttpRequest;
    }) => void, failure: (error: EventSourceError) => void) => (void | PromiseLike<EventInput[]>);
    export interface EventSourceDef {
        ignoreRange?: boolean;
        parseMeta: (raw: EventSourceInput) => object | null;
        fetch: EventSourceFetcher;
    }
    export function doesSourceNeedRange(eventSource: EventSource, calendar: Calendar): boolean;
    export function parseEventSource(raw: EventSourceInput, calendar: Calendar): EventSource | null;
}

declare module '@fullcalendar/core/interactions/interaction' {
    import DateComponent from '@fullcalendar/core/component/DateComponent';
    export abstract class Interaction {
        component: DateComponent<any>;
        constructor(settings: InteractionSettings);
        destroy(): void;
    }
    export type InteractionClass = {
        new (settings: InteractionSettings): Interaction;
    };
    export interface InteractionSettingsInput {
        el: HTMLElement;
        useEventCenter?: boolean;
    }
    export interface InteractionSettings {
        component: DateComponent<any>;
        el: HTMLElement;
        useEventCenter: boolean;
    }
    export type InteractionSettingsStore = {
        [componenUid: string]: InteractionSettings;
    };
    export function parseInteractionSettings(component: DateComponent<any>, input: InteractionSettingsInput): InteractionSettings;
    export function interactionSettingsToStore(settings: InteractionSettings): {
        [x: string]: InteractionSettings;
    };
    export let interactionSettingsStore: InteractionSettingsStore;
}

declare module '@fullcalendar/core/interactions/pointer' {
    export interface PointerDragEvent {
        origEvent: UIEvent;
        isTouch: boolean;
        subjectEl: EventTarget;
        pageX: number;
        pageY: number;
        deltaX: number;
        deltaY: number;
    }
}

declare module '@fullcalendar/core/interactions/hit' {
    import DateComponent from '@fullcalendar/core/component/DateComponent';
    import { DateSpan } from '@fullcalendar/core/structs/date-span';
    import { Rect } from '@fullcalendar/core/util/geom';
    export interface Hit {
        component: DateComponent<any>;
        dateSpan: DateSpan;
        dayEl: HTMLElement;
        rect: Rect;
        layer: number;
    }
}

declare module '@fullcalendar/core/interactions/date-selecting' {
    import { Hit } from '@fullcalendar/core/interactions/hit';
    export type dateSelectionJoinTransformer = (hit0: Hit, hit1: Hit) => any;
}

declare module '@fullcalendar/core/interactions/event-dragging' {
    import Calendar from '@fullcalendar/core/Calendar';
    import { EventMutation } from '@fullcalendar/core/structs/event-mutation';
    import { Hit } from '@fullcalendar/core/interactions/hit';
    import { EventDef } from '@fullcalendar/core/structs/event';
    import { EventUi } from '@fullcalendar/core/component/event-ui';
    import { View } from '@fullcalendar/core';
    export type eventDragMutationMassager = (mutation: EventMutation, hit0: Hit, hit1: Hit) => void;
    export type EventDropTransformers = (mutation: EventMutation, calendar: Calendar) => any;
    export type eventIsDraggableTransformer = (val: boolean, eventDef: EventDef, eventUi: EventUi, view: View) => boolean;
}

declare module '@fullcalendar/core/interactions/event-resizing' {
    import { Hit } from '@fullcalendar/core/interactions/hit';
    export type EventResizeJoinTransforms = (hit0: Hit, hit1: Hit) => false | object;
}

declare module '@fullcalendar/core/interactions/ElementDragging' {
    import EmitterMixin from '@fullcalendar/core/common/EmitterMixin';
    export { ElementDragging as default, ElementDragging };
    abstract class ElementDragging {
        emitter: EmitterMixin;
        constructor(el: HTMLElement);
        destroy(): void;
        abstract setIgnoreMove(bool: boolean): void;
        setMirrorIsVisible(bool: boolean): void;
        setMirrorNeedsRevert(bool: boolean): void;
        setAutoScrollEnabled(bool: boolean): void;
    }
    export type ElementDraggingClass = {
        new (el: HTMLElement): ElementDragging;
    };
}

declare module '@fullcalendar/core/formatting-api' {
    import { DateInput } from '@fullcalendar/core/datelib/env';
    export function formatDate(dateInput: DateInput, settings?: {}): any;
    export function formatRange(startInput: DateInput, endInput: DateInput, settings: any): any;
}

declare module '@fullcalendar/core/options' {
    import { PluginDef } from '@fullcalendar/core/plugin-system';
    export const config: any;
    export const globalDefaults: {
        defaultRangeSeparator: string;
        titleRangeSeparator: string;
        defaultTimedEventDuration: string;
        defaultAllDayEventDuration: {
            day: number;
        };
        forceEventDuration: boolean;
        nextDayThreshold: string;
        columnHeader: boolean;
        defaultView: string;
        aspectRatio: number;
        header: {
            left: string;
            center: string;
            right: string;
        };
        weekends: boolean;
        weekNumbers: boolean;
        weekNumberCalculation: string;
        editable: boolean;
        scrollTime: string;
        minTime: string;
        maxTime: string;
        showNonCurrentDates: boolean;
        lazyFetching: boolean;
        startParam: string;
        endParam: string;
        timeZoneParam: string;
        timeZone: string;
        locales: any[];
        locale: string;
        timeGridEventMinHeight: number;
        themeSystem: string;
        dragRevertDuration: number;
        dragScroll: boolean;
        allDayMaintainDuration: boolean;
        unselectAuto: boolean;
        dropAccept: string;
        eventOrder: string;
        eventLimit: boolean;
        eventLimitClick: string;
        dayPopoverFormat: {
            month: string;
            day: string;
            year: string;
        };
        handleWindowResize: boolean;
        windowResizeDelay: number;
        longPressDelay: number;
        eventDragMinDistance: number;
    };
    export const rtlDefaults: {
        header: {
            left: string;
            center: string;
            right: string;
        };
        buttonIcons: {
            prev: string;
            next: string;
            prevYear: string;
            nextYear: string;
        };
    };
    export function mergeOptions(optionObjs: any): any;
    export function refinePluginDefs(pluginInputs: any[]): PluginDef[];
}

declare module '@fullcalendar/core/structs/recurring-event' {
    import { EventInput, EventDef } from '@fullcalendar/core/structs/event';
    import { DateRange } from '@fullcalendar/core/datelib/date-range';
    import { DateEnv } from '@fullcalendar/core/datelib/env';
    import { Duration } from '@fullcalendar/core/datelib/duration';
    import { DateMarker } from '@fullcalendar/core/datelib/marker';
    export interface ParsedRecurring {
        typeData: any;
        allDayGuess: boolean | null;
        duration: Duration | null;
    }
    export interface RecurringType {
        parse: (rawEvent: EventInput, leftoverProps: any, dateEnv: DateEnv) => ParsedRecurring | null;
        expand: (typeData: any, framingRange: DateRange, dateEnv: DateEnv) => DateMarker[];
    }
    export function parseRecurring(eventInput: EventInput, allDayDefault: boolean | null, dateEnv: DateEnv, recurringTypes: RecurringType[], leftovers: any): {
        allDay: any;
        duration: Duration;
        typeData: any;
        typeId: number;
    };
    export function expandRecurringRanges(eventDef: EventDef, duration: Duration, framingRange: DateRange, dateEnv: DateEnv, recurringTypes: RecurringType[]): DateMarker[];
}

declare module '@fullcalendar/core/structs/drag-meta' {
    import { Duration, DurationInput } from '@fullcalendar/core/datelib/duration';
    import { EventNonDateInput } from '@fullcalendar/core/structs/event';
    export interface DragMetaInput extends EventNonDateInput {
        startTime?: DurationInput;
        duration?: DurationInput;
        create?: boolean;
        sourceId?: string;
    }
    export interface DragMeta {
        startTime: Duration | null;
        duration: Duration | null;
        create: boolean;
        sourceId: string;
        leftoverProps: object;
    }
    export function parseDragMeta(raw: DragMetaInput): DragMeta;
}

declare module '@fullcalendar/core/plugin-system' {
    import { reducerFunc } from '@fullcalendar/core/reducers/types';
    import { eventDefParserFunc } from '@fullcalendar/core/structs/event';
    import { eventDefMutationApplier } from '@fullcalendar/core/structs/event-mutation';
    import Calendar, { DatePointTransform, DateSpanTransform, CalendarInteractionClass, OptionChangeHandlerMap } from '@fullcalendar/core/Calendar';
    import { ViewConfigInputHash } from '@fullcalendar/core/structs/view-config';
    import { ViewSpec } from '@fullcalendar/core/structs/view-spec';
    import View, { ViewProps } from '@fullcalendar/core/View';
    import { CalendarComponentProps } from '@fullcalendar/core/CalendarComponent';
    import { isPropsValidTester } from '@fullcalendar/core/validation';
    import { eventDragMutationMassager, eventIsDraggableTransformer, EventDropTransformers } from '@fullcalendar/core/interactions/event-dragging';
    import { dateSelectionJoinTransformer } from '@fullcalendar/core/interactions/date-selecting';
    import { EventResizeJoinTransforms } from '@fullcalendar/core/interactions/event-resizing';
    import { ExternalDefTransform } from '@fullcalendar/core/interactions/external-element-dragging';
    import { InteractionClass } from '@fullcalendar/core/interactions/interaction';
    import { ThemeClass } from '@fullcalendar/core/theme/Theme';
    import { EventSourceDef } from '@fullcalendar/core/structs/event-source';
    import { CmdFormatterFunc } from '@fullcalendar/core/datelib/formatting-cmd';
    import { RecurringType } from '@fullcalendar/core/structs/recurring-event';
    import { NamedTimeZoneImplClass } from '@fullcalendar/core/datelib/timezone';
    import { ElementDraggingClass } from '@fullcalendar/core/interactions/ElementDragging';
    export interface PluginDefInput {
        deps?: PluginDef[];
        reducers?: reducerFunc[];
        eventDefParsers?: eventDefParserFunc[];
        isDraggableTransformers?: eventIsDraggableTransformer[];
        eventDragMutationMassagers?: eventDragMutationMassager[];
        eventDefMutationAppliers?: eventDefMutationApplier[];
        dateSelectionTransformers?: dateSelectionJoinTransformer[];
        datePointTransforms?: DatePointTransform[];
        dateSpanTransforms?: DateSpanTransform[];
        views?: ViewConfigInputHash;
        viewPropsTransformers?: ViewPropsTransformerClass[];
        isPropsValid?: isPropsValidTester;
        externalDefTransforms?: ExternalDefTransform[];
        eventResizeJoinTransforms?: EventResizeJoinTransforms[];
        viewContainerModifiers?: ViewContainerModifier[];
        eventDropTransformers?: EventDropTransformers[];
        componentInteractions?: InteractionClass[];
        calendarInteractions?: CalendarInteractionClass[];
        themeClasses?: {
            [themeSystemName: string]: ThemeClass;
        };
        eventSourceDefs?: EventSourceDef[];
        cmdFormatter?: CmdFormatterFunc;
        recurringTypes?: RecurringType[];
        namedTimeZonedImpl?: NamedTimeZoneImplClass;
        defaultView?: string;
        elementDraggingImpl?: ElementDraggingClass;
        optionChangeHandlers?: OptionChangeHandlerMap;
    }
    export interface PluginHooks {
        reducers: reducerFunc[];
        eventDefParsers: eventDefParserFunc[];
        isDraggableTransformers: eventIsDraggableTransformer[];
        eventDragMutationMassagers: eventDragMutationMassager[];
        eventDefMutationAppliers: eventDefMutationApplier[];
        dateSelectionTransformers: dateSelectionJoinTransformer[];
        datePointTransforms: DatePointTransform[];
        dateSpanTransforms: DateSpanTransform[];
        views: ViewConfigInputHash;
        viewPropsTransformers: ViewPropsTransformerClass[];
        isPropsValid: isPropsValidTester | null;
        externalDefTransforms: ExternalDefTransform[];
        eventResizeJoinTransforms: EventResizeJoinTransforms[];
        viewContainerModifiers: ViewContainerModifier[];
        eventDropTransformers: EventDropTransformers[];
        componentInteractions: InteractionClass[];
        calendarInteractions: CalendarInteractionClass[];
        themeClasses: {
            [themeSystemName: string]: ThemeClass;
        };
        eventSourceDefs: EventSourceDef[];
        cmdFormatter?: CmdFormatterFunc;
        recurringTypes: RecurringType[];
        namedTimeZonedImpl?: NamedTimeZoneImplClass;
        defaultView: string;
        elementDraggingImpl?: ElementDraggingClass;
        optionChangeHandlers: OptionChangeHandlerMap;
    }
    export interface PluginDef extends PluginHooks {
        id: string;
        deps: PluginDef[];
    }
    export type ViewPropsTransformerClass = new () => ViewPropsTransformer;
    export interface ViewPropsTransformer {
        transform(viewProps: ViewProps, viewSpec: ViewSpec, calendarProps: CalendarComponentProps, view: View): any;
    }
    export type ViewContainerModifier = (contentEl: HTMLElement, calendar: Calendar) => void;
    export function createPlugin(input: PluginDefInput): PluginDef;
    export class PluginSystem {
        hooks: PluginHooks;
        addedHash: {
            [pluginId: string]: true;
        };
        constructor();
        add(plugin: PluginDef): void;
    }
}

declare module '@fullcalendar/core/reducers/types' {
    import { EventInput, EventInstanceHash } from '@fullcalendar/core/structs/event';
    import { DateRange } from '@fullcalendar/core/datelib/date-range';
    import { EventStore } from '@fullcalendar/core/structs/event-store';
    import { EventMutation } from '@fullcalendar/core/structs/event-mutation';
    import { EventSource, EventSourceHash, EventSourceError } from '@fullcalendar/core/structs/event-source';
    import { DateProfile } from '@fullcalendar/core/DateProfileGenerator';
    import { EventInteractionState } from '@fullcalendar/core/interactions/event-interaction-state';
    import { DateSpan } from '@fullcalendar/core/structs/date-span';
    import { DateEnv } from '@fullcalendar/core/datelib/env';
    import Calendar from '@fullcalendar/core/Calendar';
    import { DateMarker } from '@fullcalendar/core/datelib/marker';
    export interface CalendarState {
        eventSources: EventSourceHash;
        eventSourceLoadingLevel: number;
        loadingLevel: number;
        viewType: string;
        currentDate: DateMarker;
        dateProfile: DateProfile | null;
        eventStore: EventStore;
        dateSelection: DateSpan | null;
        eventSelection: string;
        eventDrag: EventInteractionState | null;
        eventResize: EventInteractionState | null;
    }
    export type reducerFunc = (state: CalendarState, action: Action, calendar: Calendar) => CalendarState;
    export type Action = {
        type: 'INIT';
    } | // wont it create another rerender?
    {
        type: 'PREV';
    } | {
        type: 'NEXT';
    } | {
        type: 'SET_DATE';
        dateMarker: DateMarker;
    } | {
        type: 'SET_VIEW_TYPE';
        viewType: string;
        dateMarker?: DateMarker;
    } | {
        type: 'SELECT_DATES';
        selection: DateSpan;
    } | {
        type: 'UNSELECT_DATES';
    } | {
        type: 'SELECT_EVENT';
        eventInstanceId: string;
    } | {
        type: 'UNSELECT_EVENT';
    } | {
        type: 'SET_EVENT_DRAG';
        state: EventInteractionState;
    } | {
        type: 'UNSET_EVENT_DRAG';
    } | {
        type: 'SET_EVENT_RESIZE';
        state: EventInteractionState;
    } | {
        type: 'UNSET_EVENT_RESIZE';
    } | {
        type: 'ADD_EVENT_SOURCES';
        sources: EventSource[];
    } | {
        type: 'REMOVE_EVENT_SOURCE';
        sourceId: string;
    } | {
        type: 'REMOVE_ALL_EVENT_SOURCES';
    } | {
        type: 'FETCH_EVENT_SOURCES';
        sourceIds?: string[];
    } | // if no sourceIds, fetch all
    {
        type: 'CHANGE_TIMEZONE';
        oldDateEnv: DateEnv;
    } | {
        type: 'RECEIVE_EVENTS';
        sourceId: string;
        fetchId: string;
        fetchRange: DateRange | null;
        rawEvents: EventInput[];
    } | {
        type: 'RECEIVE_EVENT_ERROR';
        sourceId: string;
        fetchId: string;
        fetchRange: DateRange | null;
        error: EventSourceError;
    } | // need all these?
    {
        type: 'ADD_EVENTS';
        eventStore: EventStore;
    } | {
        type: 'MERGE_EVENTS';
        eventStore: EventStore;
    } | {
        type: 'MUTATE_EVENTS';
        instanceId: string;
        mutation: EventMutation;
        fromApi?: boolean;
    } | {
        type: 'REMOVE_EVENT_DEF';
        defId: string;
    } | {
        type: 'REMOVE_EVENT_INSTANCES';
        instances: EventInstanceHash;
    } | {
        type: 'REMOVE_ALL_EVENTS';
    } | {
        type: 'RESET_EVENTS';
    };
}

declare module '@fullcalendar/core/CalendarComponent' {
    import Component, { ComponentContext } from '@fullcalendar/core/component/Component';
    import { ViewSpec } from '@fullcalendar/core/structs/view-spec';
    import View from '@fullcalendar/core/View';
    import Toolbar from '@fullcalendar/core/Toolbar';
    import DateProfileGenerator, { DateProfile } from '@fullcalendar/core/DateProfileGenerator';
    import { EventStore } from '@fullcalendar/core/structs/event-store';
    import { EventUiHash } from '@fullcalendar/core/component/event-ui';
    import { BusinessHoursInput } from '@fullcalendar/core/structs/business-hours';
    import { DateMarker } from '@fullcalendar/core/datelib/marker';
    import { CalendarState } from '@fullcalendar/core/reducers/types';
    export interface CalendarComponentProps extends CalendarState {
        viewSpec: ViewSpec;
        dateProfileGenerator: DateProfileGenerator;
        eventUiBases: EventUiHash;
    }
    export { CalendarComponent as default, CalendarComponent };
    class CalendarComponent extends Component<CalendarComponentProps> {
        view: View;
        header: Toolbar;
        footer: Toolbar;
        computeTitle: (dateProfile: any, viewOptions: any) => string;
        parseBusinessHours: (input: BusinessHoursInput) => EventStore;
        el: HTMLElement;
        contentEl: HTMLElement;
        isHeightAuto: boolean;
        viewHeight: number;
        constructor(context: ComponentContext, el: HTMLElement);
        destroy(): void;
        toggleElClassNames(bool: boolean): void;
        render(props: CalendarComponentProps): void;
        renderToolbars(viewSpec: ViewSpec, dateProfile: DateProfile, currentDate: DateMarker, dateProfileGenerator: DateProfileGenerator, title: string): void;
        renderView(props: CalendarComponentProps, title: string): void;
        updateSize(isResize?: boolean): void;
        computeHeightVars(): void;
        queryToolbarsHeight(): number;
        freezeHeight(): void;
        thawHeight(): void;
    }
}

declare module '@fullcalendar/core/common/DayHeader' {
    import Component, { ComponentContext } from '@fullcalendar/core/component/Component';
    import { DateMarker } from '@fullcalendar/core/datelib/marker';
    import { DateProfile } from '@fullcalendar/core/DateProfileGenerator';
    export interface DayTableHeaderProps {
        dates: DateMarker[];
        dateProfile: DateProfile;
        datesRepDistinctDays: boolean;
        renderIntroHtml?: () => string;
    }
    export { DayHeader as default, DayHeader };
    class DayHeader extends Component<DayTableHeaderProps> {
        el: HTMLElement;
        thead: HTMLElement;
        constructor(context: ComponentContext, parentEl: HTMLElement);
        destroy(): void;
        render(props: DayTableHeaderProps): void;
    }
}

declare module '@fullcalendar/core/common/table-utils' {
    import { DateMarker } from '@fullcalendar/core/datelib/marker';
    import { DateProfile } from '@fullcalendar/core/DateProfileGenerator';
    import { ComponentContext } from '@fullcalendar/core/component/Component';
    export function computeFallbackHeaderFormat(datesRepDistinctDays: boolean, dayCnt: number): {
        weekday: string;
        month?: undefined;
        day?: undefined;
        omitCommas?: undefined;
    } | {
        weekday: string;
        month: string;
        day: string;
        omitCommas: boolean;
    };
    export function renderDateCell(dateMarker: DateMarker, dateProfile: DateProfile, datesRepDistinctDays: any, colCnt: any, colHeadFormat: any, context: ComponentContext, colspan?: any, otherAttrs?: any): string;
}

declare module '@fullcalendar/core/common/DaySeries' {
    import DateProfileGenerator from '@fullcalendar/core/DateProfileGenerator';
    import { DateMarker } from '@fullcalendar/core/datelib/marker';
    import { DateRange } from '@fullcalendar/core/datelib/date-range';
    export interface DaySeriesSeg {
        firstIndex: number;
        lastIndex: number;
        isStart: boolean;
        isEnd: boolean;
    }
    export { DaySeries as default, DaySeries };
    class DaySeries {
        cnt: number;
        dates: DateMarker[];
        indices: number[];
        constructor(range: DateRange, dateProfileGenerator: DateProfileGenerator);
        sliceRange(range: DateRange): DaySeriesSeg | null;
    }
}

declare module '@fullcalendar/core/interactions/event-interaction-state' {
    import { EventStore } from '@fullcalendar/core/structs/event-store';
    import { Seg } from '@fullcalendar/core/component/DateComponent';
    export interface EventInteractionState {
        affectedEvents: EventStore;
        mutatedEvents: EventStore;
        isEvent: boolean;
        origSeg: Seg | null;
    }
}

declare module '@fullcalendar/core/component/event-rendering' {
    import { EventDef, EventTuple, EventDefHash } from '@fullcalendar/core/structs/event';
    import { EventStore } from '@fullcalendar/core/structs/event-store';
    import { DateRange } from '@fullcalendar/core/datelib/date-range';
    import { Duration } from '@fullcalendar/core/datelib/duration';
    import { Seg } from '@fullcalendar/core/component/DateComponent';
    import View from '@fullcalendar/core/View';
    import { EventUi, EventUiHash } from '@fullcalendar/core/component/event-ui';
    export interface EventRenderRange extends EventTuple {
        ui: EventUi;
        range: DateRange;
        isStart: boolean;
        isEnd: boolean;
    }
    export function sliceEventStore(eventStore: EventStore, eventUiBases: EventUiHash, framingRange: DateRange, nextDayThreshold?: Duration): {
        bg: EventRenderRange[];
        fg: EventRenderRange[];
    };
    export function hasBgRendering(def: EventDef): boolean;
    export function filterSegsViaEls(view: View, segs: Seg[], isMirror: boolean): Seg[];
    export function getElSeg(el: HTMLElement): Seg | null;
    export function compileEventUis(eventDefs: EventDefHash, eventUiBases: EventUiHash): {
        [key: string]: EventUi;
    };
    export function compileEventUi(eventDef: EventDef, eventUiBases: EventUiHash): EventUi;
}

declare module '@fullcalendar/core/common/DayTable' {
    import DaySeries from '@fullcalendar/core/common/DaySeries';
    import { DateRange } from '@fullcalendar/core/datelib/date-range';
    import { DateMarker } from '@fullcalendar/core/datelib/marker';
    import { Seg } from '@fullcalendar/core/component/DateComponent';
    export interface DayTableSeg extends Seg {
        row: number;
        firstCol: number;
        lastCol: number;
    }
    export interface DayTableCell {
        date: DateMarker;
        htmlAttrs?: string;
    }
    export { DayTable as default, DayTable };
    class DayTable {
        rowCnt: number;
        colCnt: number;
        cells: DayTableCell[][];
        headerDates: DateMarker[];
        constructor(daySeries: DaySeries, breakOnWeeks: boolean);
        sliceRange(range: DateRange): DayTableSeg[];
    }
}

declare module '@fullcalendar/core/common/slicing-utils' {
    import { DateRange } from '@fullcalendar/core/datelib/date-range';
    import { EventStore } from '@fullcalendar/core/structs/event-store';
    import { EventUiHash } from '@fullcalendar/core/component/event-ui';
    import { DateProfile } from '@fullcalendar/core/DateProfileGenerator';
    import DateComponent, { Seg, EventSegUiInteractionState } from '@fullcalendar/core/component/DateComponent';
    import { DateSpan } from '@fullcalendar/core/structs/date-span';
    import { EventInteractionState } from '@fullcalendar/core/interactions/event-interaction-state';
    import { Duration } from '@fullcalendar/core/datelib/duration';
    import { DateMarker } from '@fullcalendar/core/datelib/marker';
    export interface SliceableProps {
        dateSelection: DateSpan;
        businessHours: EventStore;
        eventStore: EventStore;
        eventDrag: EventInteractionState | null;
        eventResize: EventInteractionState | null;
        eventSelection: string;
        eventUiBases: EventUiHash;
    }
    export interface SlicedProps<SegType extends Seg> {
        dateSelectionSegs: SegType[];
        businessHourSegs: SegType[];
        fgEventSegs: SegType[];
        bgEventSegs: SegType[];
        eventDrag: EventSegUiInteractionState | null;
        eventResize: EventSegUiInteractionState | null;
        eventSelection: string;
    }
    export { Slicer as default, Slicer };
    abstract class Slicer<SegType extends Seg, ExtraArgs extends any[] = []> {
        abstract sliceRange(dateRange: DateRange, ...extraArgs: ExtraArgs): SegType[];
        sliceProps(props: SliceableProps, dateProfile: DateProfile, nextDayThreshold: Duration | null, component: DateComponent<any>, // TODO: kill
        ...extraArgs: ExtraArgs): SlicedProps<SegType>;
        sliceNowDate(// does not memoize
        date: DateMarker, component: DateComponent<any>, // TODO: kill
        ...extraArgs: ExtraArgs): SegType[];
    }
}

declare module '@fullcalendar/core/structs/event-mutation' {
    import { Duration } from '@fullcalendar/core/datelib/duration';
    import { EventStore } from '@fullcalendar/core/structs/event-store';
    import { EventDef } from '@fullcalendar/core/structs/event';
    import Calendar from '@fullcalendar/core/Calendar';
    import { EventUiHash } from '@fullcalendar/core/component/event-ui';
    export interface EventMutation {
        datesDelta?: Duration;
        startDelta?: Duration;
        endDelta?: Duration;
        standardProps?: any;
        extendedProps?: any;
    }
    export function applyMutationToEventStore(eventStore: EventStore, eventConfigBase: EventUiHash, mutation: EventMutation, calendar: Calendar): EventStore;
    export type eventDefMutationApplier = (eventDef: EventDef, mutation: EventMutation, calendar: Calendar) => void;
}

declare module '@fullcalendar/core/validation' {
    import { EventStore } from '@fullcalendar/core/structs/event-store';
    import Calendar from '@fullcalendar/core/Calendar';
    import { DateSpan, DateSpanApi } from '@fullcalendar/core/structs/date-span';
    import EventApi from '@fullcalendar/core/api/EventApi';
    import { EventInput } from '@fullcalendar/core/structs/event';
    import { EventInteractionState } from '@fullcalendar/core/interactions/event-interaction-state';
    import { SplittableProps } from '@fullcalendar/core/component/event-splitting';
    export type ConstraintInput = 'businessHours' | string | EventInput | EventInput[];
    export type Constraint = 'businessHours' | string | EventStore | false;
    export type OverlapFunc = ((stillEvent: EventApi, movingEvent: EventApi | null) => boolean);
    export type AllowFunc = (span: DateSpanApi, movingEvent: EventApi | null) => boolean;
    export type isPropsValidTester = (props: SplittableProps, calendar: Calendar) => boolean;
    export function isInteractionValid(interaction: EventInteractionState, calendar: Calendar): boolean;
    export function isDateSelectionValid(dateSelection: DateSpan, calendar: Calendar): boolean;
    export function isPropsValid(state: SplittableProps, calendar: Calendar, dateSpanMeta?: {}, filterConfig?: any): boolean;
    export function normalizeConstraint(input: ConstraintInput, calendar: Calendar): Constraint | null;
}

declare module '@fullcalendar/core/api/EventApi' {
    import Calendar from '@fullcalendar/core/Calendar';
    import { EventDef, EventInstance } from '@fullcalendar/core/structs/event';
    import { EventMutation } from '@fullcalendar/core/structs/event-mutation';
    import { DateInput } from '@fullcalendar/core/datelib/env';
    import { DurationInput } from '@fullcalendar/core/datelib/duration';
    import { FormatterInput } from '@fullcalendar/core/datelib/formatting';
    import EventSourceApi from '@fullcalendar/core/api/EventSourceApi';
    export { EventApi as default, EventApi };
    class EventApi {
        _calendar: Calendar;
        _def: EventDef;
        _instance: EventInstance | null;
        constructor(calendar: Calendar, def: EventDef, instance?: EventInstance);
        setProp(name: string, val: string): void;
        setExtendedProp(name: string, val: any): void;
        setStart(startInput: DateInput, options?: {
            granularity?: string;
            maintainDuration?: boolean;
        }): void;
        setEnd(endInput: DateInput | null, options?: {
            granularity?: string;
        }): void;
        setDates(startInput: DateInput, endInput: DateInput | null, options?: {
            allDay?: boolean;
            granularity?: string;
        }): void;
        moveStart(deltaInput: DurationInput): void;
        moveEnd(deltaInput: DurationInput): void;
        moveDates(deltaInput: DurationInput): void;
        setAllDay(allDay: boolean, options?: {
            maintainDuration?: boolean;
        }): void;
        formatRange(formatInput: FormatterInput): any;
        mutate(mutation: EventMutation): void;
        remove(): void;
        readonly source: EventSourceApi | null;
        readonly start: Date | null;
        readonly end: Date | null;
        readonly id: string;
        readonly groupId: string;
        readonly allDay: boolean;
        readonly title: string;
        readonly url: string;
        readonly rendering: string;
        readonly startEditable: boolean;
        readonly durationEditable: boolean;
        readonly constraint: any;
        readonly overlap: any;
        readonly allow: any;
        readonly backgroundColor: string;
        readonly borderColor: string;
        readonly textColor: string;
        readonly classNames: string[];
        readonly extendedProps: any;
    }
}

declare module '@fullcalendar/core/util/requestJson' {
    export default function requestJson(method: string, url: string, params: object, successCallback: any, failureCallback: any): void;
}

declare module '@fullcalendar/core/datelib/locale' {
    export type LocaleCodeArg = string | string[];
    export type LocaleSingularArg = LocaleCodeArg | RawLocale;
    export interface Locale {
        codeArg: LocaleCodeArg;
        codes: string[];
        week: {
            dow: number;
            doy: number;
        };
        simpleNumberFormat: Intl.NumberFormat;
        options: any;
    }
    export interface RawLocale {
        code: string;
        [otherProp: string]: any;
    }
    export type RawLocaleMap = {
        [code: string]: RawLocale;
    };
    export interface RawLocaleInfo {
        map: RawLocaleMap;
        defaultCode: string;
    }
    export function parseRawLocales(explicitRawLocales: RawLocale[]): RawLocaleInfo;
    export function buildLocale(inputSingular: LocaleSingularArg, available: RawLocaleMap): Locale;
}

declare module '@fullcalendar/core/OptionsManager' {
    export { OptionsManager as default, OptionsManager };
    class OptionsManager {
        dirDefaults: any;
        localeDefaults: any;
        overrides: any;
        dynamicOverrides: any;
        computed: any;
        constructor(overrides: any);
        mutate(updates: any, removals: string[], isDynamic?: boolean): void;
        compute(): void;
    }
}

declare module '@fullcalendar/core/api/EventSourceApi' {
    import Calendar from '@fullcalendar/core/Calendar';
    import { EventSource } from '@fullcalendar/core/structs/event-source';
    export { EventSourceApi as default, EventSourceApi };
    class EventSourceApi {
        calendar: Calendar;
        internalEventSource: EventSource;
        constructor(calendar: Calendar, internalEventSource: EventSource);
        remove(): void;
        refetch(): void;
        readonly id: string;
        readonly url: string;
    }
}

declare module '@fullcalendar/core/structs/view-config' {
    import View from '@fullcalendar/core/View';
    import { ViewSpec } from '@fullcalendar/core/structs/view-spec';
    import { ComponentContext } from '@fullcalendar/core/component/Component';
    import DateProfileGenerator from '@fullcalendar/core/DateProfileGenerator';
    export type ViewClass = new (context: ComponentContext, viewSpec: ViewSpec, dateProfileGenerator: DateProfileGenerator, parentEl: HTMLElement) => View;
    export interface ViewConfigObjectInput {
        type?: string;
        class?: ViewClass;
        [optionName: string]: any;
    }
    export type ViewConfigInput = ViewClass | ViewConfigObjectInput;
    export type ViewConfigInputHash = {
        [viewType: string]: ViewConfigInput;
    };
    export interface ViewConfig {
        superType: string;
        class: ViewClass | null;
        options: any;
    }
    export type ViewConfigHash = {
        [viewType: string]: ViewConfig;
    };
    export function parseViewConfigs(inputs: ViewConfigInputHash): ViewConfigHash;
}

declare module '@fullcalendar/core/datelib/calendar-system' {
    import { DateMarker } from '@fullcalendar/core/datelib/marker';
    export interface CalendarSystem {
        getMarkerYear(d: DateMarker): number;
        getMarkerMonth(d: DateMarker): number;
        getMarkerDay(d: DateMarker): number;
        arrayToMarker(arr: number[]): DateMarker;
        markerToArray(d: DateMarker): number[];
    }
    export function registerCalendarSystem(name: any, theClass: any): void;
    export function createCalendarSystem(name: any): any;
}

declare module '@fullcalendar/core/datelib/formatting-cmd' {
    import { DateFormatter, DateFormattingContext, ZonedMarker, VerboseFormattingArg } from '@fullcalendar/core/datelib/formatting';
    export type CmdFormatterFunc = (cmd: string, arg: VerboseFormattingArg) => string;
    export class CmdFormatter implements DateFormatter {
        cmdStr: string;
        separator: string;
        constructor(cmdStr: string, separator?: string);
        format(date: ZonedMarker, context: DateFormattingContext): string;
        formatRange(start: ZonedMarker, end: ZonedMarker, context: DateFormattingContext): string;
    }
}

declare module '@fullcalendar/core/datelib/formatting-func' {
    import { DateFormatter, DateFormattingContext, ZonedMarker, VerboseFormattingArg } from '@fullcalendar/core/datelib/formatting';
    export type FuncFormatterFunc = (arg: VerboseFormattingArg) => string;
    export class FuncFormatter implements DateFormatter {
        func: FuncFormatterFunc;
        constructor(func: FuncFormatterFunc);
        format(date: ZonedMarker, context: DateFormattingContext): string;
        formatRange(start: ZonedMarker, end: ZonedMarker, context: DateFormattingContext): string;
    }
}

declare module '@fullcalendar/core/event-sources/func-event-source' {
    import { EventSourceError } from '@fullcalendar/core/structs/event-source';
    import { EventInput } from '@fullcalendar/core/structs/event';
    export type EventSourceFunc = (arg: {
        start: Date;
        end: Date;
        timeZone: string;
    }, successCallback: (events: EventInput[]) => void, failureCallback: (error: EventSourceError) => void) => (void | PromiseLike<EventInput[]>);
    const _default: import("@fullcalendar/core/plugin-system").PluginDef;
    export default _default;
}

declare module '@fullcalendar/core/interactions/external-element-dragging' {
    import { DateSpan } from '@fullcalendar/core/structs/date-span';
    import { DragMeta } from '@fullcalendar/core/structs/drag-meta';
    export type ExternalDefTransform = (dateSpan: DateSpan, dragMeta: DragMeta) => any;
}

declare module '@fullcalendar/core/Toolbar' {
    import Component, { ComponentContext } from '@fullcalendar/core/component/Component';
    export interface ToolbarRenderProps {
        layout: any;
        title: string;
        activeButton: string;
        isTodayEnabled: boolean;
        isPrevEnabled: boolean;
        isNextEnabled: boolean;
    }
    export { Toolbar as default, Toolbar };
    class Toolbar extends Component<ToolbarRenderProps> {
        el: HTMLElement;
        viewsWithButtons: any;
        constructor(context: ComponentContext, extraClassName: any);
        destroy(): void;
        render(props: ToolbarRenderProps): void;
        renderLayout(layout: any): void;
        unrenderLayout(): void;
        renderSection(position: any, buttonStr: any): HTMLElement;
        updateToday(isTodayEnabled: any): void;
        updatePrev(isPrevEnabled: any): void;
        updateNext(isNextEnabled: any): void;
        updateTitle(text: any): void;
        updateActiveButton(buttonName?: any): void;
        toggleButtonEnabled(buttonName: any, bool: any): void;
    }
}

