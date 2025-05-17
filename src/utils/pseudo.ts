type ReturnType<S extends string, V extends string> = `${V}(${S})`;

// Functional classes
const dir = <S extends string>(str: S): ReturnType<S, ':dir'> => `:dir(${str})`;
const has = <S extends string>(str: S): ReturnType<S, ':has'> => `:has(${str})`;
const hostContext = <S extends string>(str: S): ReturnType<S, ':host-context'> => `:host-context(${str})`;
const host = <S extends string>(str: S): ReturnType<S, ':host'> => `:host(${str})`;
const is = <S extends string>(str: S): ReturnType<S, ':is'> => `:is(${str})`;
const lang = <S extends string>(str: S): ReturnType<S, ':lang'> => `:lang(${str})`;
const nthChild = <S extends string>(str: S): ReturnType<S, ':nth-child'> => `:nth-child(${str})`;
const nthLastChild = <S extends string>(str: S): ReturnType<S, ':nth-last-child'> => `:nth-last-child(${str})`;
const nthLastOfType = <S extends string>(str: S): ReturnType<S, ':nth-last-of-type'> => `:nth-last-of-type(${str})`;
const nthOfType = <S extends string>(str: S): ReturnType<S, ':nth-of-type'> => `:nth-of-type(${str})`;
const not = <S extends string>(str: S): ReturnType<S, ':not'> => `:not(${str})`;
const state = <S extends string>(str: S): ReturnType<S, ':state'> => `:state(${str})`;
const where = <S extends string>(str: S): ReturnType<S, ':where'> => `:where(${str})`;

// Functional element
const cue = <S extends string>(str: S): ReturnType<S, '::cue'> => `::cue(${str})`;
const highlight = <S extends string>(str: S): ReturnType<S, '::highlight'> => `::highlight(${str})`;
const part = <S extends string>(str: S): ReturnType<S, '::part'> => `::part(${str})`;
const slotted = <S extends string>(str: S): ReturnType<S, '::slotted'> => `::slotted(${str})`;
const viewTransitionOld = <S extends string>(str: S): ReturnType<S, '::view-transition-old'> => `::view-transition-old(${str})`;
const viewTransitionNew = <S extends string>(str: S): ReturnType<S, '::view-transition-new'> => `::view-transition-new(${str})`;
const viewTransitionGroup = <S extends string>(str: S): ReturnType<S, '::view-transition-group'> => `::view-transition-group(${str})`;
const viewTransitionImagePair = <S extends string>(str: S): ReturnType<S, '::view-transition-image-pair'> => `::view-transition-image-pair(${str})`;

const pseudoStrings = {
  // Pseudo-classes
  // A
  active: ':active',
  anyLink: ':any-link',
  autoFill: ':autofill',
  // B
  buffering: ':buffering',

  // C
  checked: ':checked',

  // D
  default: ':default',
  defined: ':defined',
  disabled: ':disabled',

  // E
  empty: ':empty',
  enabled: ':enabled',

  // F
  first: ':first',
  firstChild: ':first-child',
  firstOfType: ':first-of-type',
  focus: ':focus',
  focusVisible: ':focus-visible',
  focusWithin: ':focus-within',
  fullscreen: ':fullscreen',
  future: ':future',

  // H
  hasSlotted: ':has-slotted',
  host: ':host',
  hover: ':hover',

  // I
  inRange: ':in-range',
  indeterminate: ':indeterminate',
  invalid: ':invalid',

  // L
  lastChild: ':last-child',
  lastOfType: ':last-of-type',
  left: ':left',
  link: ':link',

  // M
  modal: ':modal',
  muted: ':muted',

  // N

  // O
  onlyChild: ':only-child',
  onlyOfType: ':only-of-type',
  open: ':open',
  optional: ':optional',
  outOfRange: ':out-of-range',

  // P
  past: ':past',
  paused: ':paused',
  pictureInPicture: ':picture-in-picture',
  placeholderShown: ':placeholder-shown',
  playing: ':playing',
  popoverOpen: ':popover-open',

  // R
  readOnly: ':read-only',
  readWrite: ':read-write',
  required: ':required',
  right: ':right',
  root: ':root',

  // S
  scope: ':scope',
  seeking: ':seeking',
  stalled: ':stalled',

  // T
  target: ':target',

  // U
  userInvalid: ':user-invalid',
  userValid: ':user-valid',

  // V
  valid: ':valid',
  visited: ':visited',
  volumeLocked: ':volume-locked',

  // Pseudo-elements
  // A
  after: '::after',

  // B
  backdrop: '::backdrop',
  before: '::before',

  // C
  cue: '::cue',

  // D
  detailsContent: '::details-content',

  // F
  firstSelectorButton: '::first-selector-button',
  firstLetter: '::first-letter',
  firstLine: '::first-line',

  // G
  grammarError: '::grammar-error',

  // H

  // M
  marker: '::marker',

  // P
  placeholder: '::placeholder',

  // S
  selection: '::selection',
  spellingError: '::spellingError',

  // T
  targetText: '::target-text',

  // V
  viewTransition: '::view-transition',
} as const;

export const pseudo = {
  ...pseudoStrings,
  fn: {
    // Functional pseudo-classes
    cue,
    dir,
    has,
    host,
    hostContext,
    is,
    lang,
    nthChild,
    nthLastChild,
    nthLastOfType,
    nthOfType,
    not,
    state,
    where,

    // Functional pseudo-elements
    highlight,
    part,
    slotted,
    viewTransitionImagePair,
    viewTransitionGroup,
    viewTransitionOld,
    viewTransitionNew,
  },
};
