import asyncio

async def main():
    test_var = 1
    test_var_2 = 2
    print('going to sleep')
    await asyncio.sleep(2)
    new = test_var+test_var_2
    print(new)
    await asyncio.sleep(2)
    print('it slept')
asyncio.run(main())
