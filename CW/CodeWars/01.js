function expressionMatter(a, b, c) {
    let m = Math.max(
      a * b + c,
      a + b * c,
      a * b * c,
      a * (b + c),
      a + (b * c),
      a * (b * c),
      a + (b + c),
      (a * b) + c,
      (a + b) * c,
    );
    
    return m;
  }