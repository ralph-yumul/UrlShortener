using System;
using System.Collections.Generic;
using System.Text;

namespace UrlShortener.Core
{
    public class Subset<T>
    {
        public Subset(IEnumerable<T> subsetData, int totalDataCount)
        {
            this.Data = subsetData;
            this.Count = totalDataCount;
        }

        public IEnumerable<T> Data { get; set; }
        public int Count { get; set; }
    }
}
