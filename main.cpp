#include <bits/stdc++.h>

using namespace std;

int main()
{
    int n,i,j,temp=0;
    int q1[3];
    for(i=0;i<2;i++)
    {
        scanf("%d",q1[i]);
    }

    for(i=0;i<2;i++)
    {
        if(q1[i] == 1)
            temp++;
    }

    if(temp==2 || temp==3)
    {
        cout<<1;
    }
    else
{
     cout<<"no";
}


    return 0;
}

