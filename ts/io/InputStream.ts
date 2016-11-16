'use strict';
/**
 * InputStream
 * @author Kazuhiko Arase
 */
export abstract class InputStream {
  constructor() { }
  public abstract readByte(): number;
  public close(): void {
  }
}

