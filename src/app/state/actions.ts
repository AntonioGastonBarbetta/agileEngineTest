export class TransformText {
  static readonly type = '[STATE] TransformText';

  constructor(public payload: string) {}
}

export class ToogleEditButtons {
  static readonly type = '[STATE] ToogleEditButtons';
}

export class GetSynonyms {
  static readonly type = '[STATE] GetSynonyms';

  constructor(public payload: string) {}
}

export class ReplaceWord {
  static readonly type = '[STATE] ReplaceWord';

  constructor(public payload: string) {}
}
