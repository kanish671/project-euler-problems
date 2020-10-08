class Solution {
  public static int coinsums(int[] coins, int m, int n) {
    int[] t = new int[n+1];
    Arrays.fill(t, 0);
    t[0] = 1;

    for(int i = 0; i < m; i++) {
      for(int j = coins[i]; j <= n; j++) {
        t[j] = t[j] + t[j-coins[i]];
      }
    }
    return t[n];
  }
}
